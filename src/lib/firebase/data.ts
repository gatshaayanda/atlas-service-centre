"use client";
import {collection,doc,getDoc,getDocs,onSnapshot,query,where,setDoc,updateDoc} from "firebase/firestore";
import type {Unsubscribe} from "firebase/firestore";
import {db} from "@/lib/firebase/client";
export const REQUEST_STATUSES=["Submitted","Accepted","Diagnostics","Spares Sourcing","Repair","Testing","Ready","Complete","Cancelled"] as const;
export type RequestStatus=typeof REQUEST_STATUSES[number];
export type ServiceRequest={id:string;customerId?:string;createdAt:string;customerName:string;phone:string;service:string;vehicle:string;registration:string;preferred:string;location:string;notes:string;status:RequestStatus;source:"online"|"offline"};
export type CustomerProfile={uid:string;name:string;email:string;phone:string;location:string;notes:string;createdAt:string;updatedAt:string};
const requests=collection(db,"serviceRequests"),customers=collection(db,"customers");
export function createServiceRequest(data:Omit<ServiceRequest,"id">){const reference=doc(requests);return{id:reference.id,writePromise:setDoc(reference,data)}}
export async function getServiceRequest(id:string){const snapshot=await getDoc(doc(requests,id));return snapshot.exists()?{id:snapshot.id,...snapshot.data() as Omit<ServiceRequest,"id">}:null}
export async function getCustomerRequests(uid:string){const snapshot=await getDocs(query(requests,where("customerId","==",uid)));return snapshot.docs.map(d=>({id:d.id,...d.data() as Omit<ServiceRequest,"id">})).sort((a,b)=>b.createdAt.localeCompare(a.createdAt))}
export function subscribeToServiceRequest(id:string,onChange:(request:ServiceRequest|null)=>void,onError:(error:Error)=>void):Unsubscribe{return onSnapshot(doc(requests,id),s=>onChange(s.exists()?{id:s.id,...s.data() as Omit<ServiceRequest,"id">}:null),e=>onError(e instanceof Error?e:new Error("Request updates unavailable.")))}
export async function getServiceRequests(){const snapshot=await getDocs(requests);return snapshot.docs.map(d=>({id:d.id,...d.data() as Omit<ServiceRequest,"id">})).sort((a,b)=>b.createdAt.localeCompare(a.createdAt))}
export function subscribeToServiceRequests(onChange:(requests:ServiceRequest[])=>void,onError:(error:Error)=>void):Unsubscribe{return onSnapshot(requests,s=>onChange(s.docs.map(d=>({id:d.id,...d.data() as Omit<ServiceRequest,"id">})).sort((a,b)=>b.createdAt.localeCompare(a.createdAt))),e=>onError(e instanceof Error?e:new Error("Workshop queue unavailable.")))}
export async function updateServiceRequestStatus(id:string,status:RequestStatus){await updateDoc(doc(requests,id),{status})}
export async function getCustomerProfile(uid:string):Promise<CustomerProfile|null>{const snapshot=await getDoc(doc(customers,uid));return snapshot.exists()?{uid:snapshot.id,...snapshot.data() as Omit<CustomerProfile,"uid">}:null}
export async function saveCustomerProfile(profile:CustomerProfile){await setDoc(doc(customers,profile.uid),profile,{merge:true})}
export async function isAdminUser(uid:string){const snapshot=await getDoc(doc(db,"admins",uid));return snapshot.exists()&&["owner","staff"].includes(String(snapshot.data().role??"").toLowerCase())}
