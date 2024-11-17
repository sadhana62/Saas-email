import { db } from "@/server/db";
// https://stamp-publications-emissions-witnesses.trycloudflare.com  
export const  POST = async(req: Request) =>{
    const {data} = await req.json()
    console.log("clerk webhook response", data);
    const emailAddress = data. email_addresses[0].email_address;
    const firstName =data.first_name;
    const lastName = data.last_name;
    const imageUrl =data.image_url;
    const id = data.id;

    await db.user.create({
        data: {
           id:id,
           emailAddress:emailAddress,
           firstName:firstName,
           lastName:lastName,
           imageUrl:imageUrl

        }
})
    return new Response("Webhook received",{status:200})
}