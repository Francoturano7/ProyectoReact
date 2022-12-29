import { initializeApp } from "firebase/app";

import {getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc, orderBy} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoYR2WV2JpRC6Q7iSyxJAj82ag_7FkLek",
  authDomain: "bati-indumentaria-react.firebaseapp.com",
  projectId: "bati-indumentaria-react",
  storageBucket: "bati-indumentaria-react.appspot.com",
  messagingSenderId: "325287403130",
  appId: "1:325287403130:web:e28c3fef8ec6c5176565c3"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)


export default async function getItems(){
const colectionProductsRef= collection(DB,"products");
const documentSnapshot= await getDocs(colectionProductsRef);
const documentsData = documentSnapshot.docs.map(doc =>{
   
    return {
        ...doc.data(),
        id: doc.id
    };
});
return documentsData;
}

export async function getItemsOrdered(){
    const colectionProductsRef= collection(DB,"products");
    const q = query(colectionProductsRef,orderBy("index"));
    const documentSnapshot= await getDocs(q);
    const documentsData = documentSnapshot.docs.map(doc =>{
       
        return {
            ...doc.data(),
            id: doc.id
        };
    });
    return documentsData;
    }

export async function  getSingleItem(idParams){
const docRef = doc(DB, "products", idParams);
const docSnapshot= await getDoc(docRef);
const itemData= docSnapshot.data();
itemData.id= docSnapshot.id;
return itemData
}

export async function getItemsByCategory(categoryParams){
const collectionRef= collection(DB,"products");
const queryCat= query(collectionRef,where("categoria","==",categoryParams))
const documentSnapshot= await getDocs(queryCat);
const documentsData = documentSnapshot.docs.map(doc =>{
   
    return {
        ...doc.data(),
        id: doc.id
    };
});
return documentsData;
}

export async function createOrder(order){
   const collectionRef = collection(DB,"orders");
   const docOrder= await addDoc(collectionRef,order);
    return(docOrder.id);

}
/* async function exportArrayToFirestore(){
    const productos=[
        {
        id:1,
        imgurl:"/imgs/remera.jpeg",
        title:"Remera Puma",
        price:4200,
        discount:"25%",
        description:"Remera 100% algodon, disponible del talle S al XXL",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:6,
        categoria:"remeras"
        },
        {
        id:2,
        imgurl:"/imgs/pantalon.jpeg",
        title:"Pantalon TRNG",
        price:3500,
        envio: "GRATIS",
        description:"Pantalon deportivo negro con cierre en los bolsillos, disponble del talle L al XL",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:10,
        categoria:"pantalones"
        },
        {
        id:3,
        imgurl:"/imgs/zapatillas.jpeg",
        title:"Zapatilla Nike ",
        price:9200,
        discount:"20%",
        description:"Zapatillas negras indoor, disponible del talle 37 al 43",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:8,
        categoria:"calzado",
        },
        {
        id:4,
        imgurl:"/imgs/ojotas.jpeg",
        title:"Ojotas Adidas",
        price:3500,
        envio: "GRATIS",
        description:"Ojotas de sintetico, disponible del talle 37 al 43",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:7,
        categoria:"calzado",
        },
        {
         id:5,
        imgurl:"/imgs/gorra.jpeg",
        title:"Gorra Freedom",
        price:2800,
        discount:"10%",
        description:"Gorra Colombiana Freedom, calidad premium",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:3,
        categoria:"gorras",
        },
        {
        id:6,
        imgurl:"/imgs/remera2.jpeg",
        title:"Remera Under",
        price:7200,
        envio: "GRATIS",
        description:"Remera 100% algodon, disponible del talle S al XXL",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:6,
        categoria:"remeras"
        },
        {
        id:7,
        imgurl:"/imgs/pantalon2.jpeg",
        title:"Pantalon Puma",
        price:4600,
        discount:"15%",
        description:"Pantalon de gabardina negro , disponble del talle L al XL",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:10,
        categoria:"pantalones",
        },
        {
         id:8,
        imgurl:"/imgs/gorra2.jpeg",
        title:"Gorra Element",
        price:2900,
        envio: "GRATIS",
        description:"Gorra Colombiana Element, calidad premium",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:3,
        categoria:"gorras"
        },
        {
        id:9,
        imgurl:"/imgs/remera3.webp",
        title:"Remera Adidas",
        price:4200,
        discount:"20%",
        description:"Remera 100% algodon, disponible del talle S al XXL",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:6,
        categoria:"remeras",
        },
        {
        id:10,
        imgurl:"/imgs/zapatilla3.webp",
        title:"Zapatilla Adidas",
        price:9200,
        envio: "GRATIS",
        description:"Zapatillas negras indoor, disponible del talle 37 al 43",
        color:"#5f2ed1",
        colorLetra:"white",
        stock:8,
        categoria:"calzado"
        },
        {
            id:11,
            imgurl:"/imgs/gorra3.webp",
            title:"Gorra New York",
            price:2600,
            discount:"25%",
            description:"Gorra negra clasica calidad premium x",
            color:"#5f2ed1",
            colorLetra:"white",
            stock:5,
            categoria:"gorras"
            },
            {
                id:12,
                imgurl:"/imgs/pantalon3.jpeg",
                title:"Pantalon Real ",
                price:4800,
                envio: "GRATIS",
                description:"Pantalon Azul Real Madrid, disponible del talle L al XL",
                color:"#5f2ed1",
                colorLetra:"white",
                stock:8,
                categoria:"pantalones"
                }
    ];
const collectionRef= collection(DB,"products" )
for(let item of productos){
    item.index=item.id;
    delete item.id;
    let docOrder = await addDoc(collectionRef,item);
    console.log(docOrder.id);
}
}*/
 