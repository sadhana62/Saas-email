import { db } from "./server/db"

await db.user.create({
    data:{
        emaiAddress: 'test@gmail.com',
        firstName: 'Sadhana',
        lastName: 'Shrivastava',

    }
})

console.log('done');