import { useEffect, useRef, useState } from 'react';
import type { Map as LeafletMap, Polyline, Marker } from 'leaflet';
import { ArrowLeft, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { locations } from './experience-data';
export function JourneyMap({onArrive}: {onArrive:()=>void}) {
 const container = useRef<HTMLDivElement>(null);
 const map = useRef<LeafletMap|null>(null);
 const path = useRef<Polyline|null>(null);
 const traveler = useRef<Marker|null>(null);
 const timer = useRef<ReturnType<typeof setInterval>|null>(null);
 const [ready,setReady] = useState(false);
 const [state,setState] = useState<'idle'|'flight'|'arrived'>('idle');
 const [km,setKm] = useState(0);
 const [error,setError] = useState(false);
 useEffect(()=>{let disposed=false; void import('leaflet').then(L=>{
 if(disposed || !container.current) return;
 const m=L.map(container.current,{zoomControl:false,attributionControl:true,scrollWheelZoom:false,dragging:true}).setView([33.32,48.95],7);
 map.current=m;
 L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',{attribution:'Tiles &copy; Esri',maxZoom:18}).addTo(m).on('tileerror',()=>setError(true));
 const pin=(label:string)=>L.divIcon({className:'journey-pin',html:`<span class="pin-center"></span><span class="pin-label">${label}</span>`,iconSize:[20,20],iconAnchor:[10,10]});
 L.marker(locations.origin,{icon:pin('اینجا منم · کرمانشاه')}).addTo(m);
 L.marker(locations.destination,{icon:pin('دختر هوشگله 🍓 · شهرکرد')}).addTo(m);
 const color=getComputedStyle(document.documentElement).getPropertyValue('--journey-line').trim();
 L.polyline([locations.origin,locations.destination],{color,weight:1,dashArray:'5 9',opacity:0.45}).addTo(m);
 path.current=L.polyline([],{color,weight:3}).addTo(m);
 traveler.current=L.marker(locations.origin,{icon:L.divIcon({className:'flight-marker',html:'✈',iconSize:[32,32],iconAnchor:[16,16]})}).addTo(m);
 setReady(true); m.fitBounds([locations.origin,locations.destination],{paddingTopLeft:[55,150],paddingBottomRight:[55,260],maxZoom:7});
 }).catch(()=>setError(true)); return()=>{disposed=true;if(timer.current)clearInterval(timer.current);map.current?.remove();map.current=null;};},[]);
 const fly=()=>{setState('flight');const started=Date.now();const points:[number,number][]=[];map.current?.flyTo([33.25,49.1],8,{duration:3});
 timer.current=setInterval(()=>{const p=Math.min((Date.now()-started)/5500,1); const ease=p*p*(3-2*p); const pos:[number,number]=[locations.origin[0]+(locations.destination[0]-locations.origin[0])*ease+Math.sin(p*Math.PI)*0.35,locations.origin[1]+(locations.destination[1]-locations.origin[1])*ease];points.push(pos);path.current?.setLatLngs(points);traveler.current?.setLatLng(pos);setKm(Math.round(415*p)); if(p===1){if(timer.current)clearInterval(timer.current);map.current?.flyTo(locations.destination,13,{duration:2});setTimeout(()=>setState('arrived'),2000);}},40);
 };
 return <section className="journey-scene"><div ref={container} className="journey-map" dir="ltr"/><div className="map-vignette"/><header className="journey-heading"><span className="eyebrow">یه مسیر، فقط برای تو</span><h1>تولدت مبارک، رزا</h1><p>از اینجا… تا دختر هوشگله 🍓</p></header><div className="journey-bottom"><div className="distance"><strong>{km.toLocaleString('fa-IR')}</strong><span>کیلومتر {state==='arrived'?'طی شد':'تا تو'}</span></div>{state==='idle'?<Button className="story-primary" disabled={!ready&&!error} onClick={fly}><Navigation/> پرواز به سمت دختر هوشگله</Button>:state==='flight'?<p className="flight-caption">داریم می‌رسیم…</p>:<><p className="arrival-caption">رسیدیم، دختر هوشگله 🍓</p><Button className="story-primary" onClick={onArrive}>بریم داخل <ArrowLeft/></Button></>}{error&&<span className="map-note">نقشه لود نشد؛ سفرمون همچنان ادامه داره.</span>}</div></section>;
}
