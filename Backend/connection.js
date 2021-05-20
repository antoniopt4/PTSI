const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://apt2:yM0lRvFoklUsYgz2@cluster0.0zcqp.mongodb.net/gs?retryWrites=true&w=majority";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     */
     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        
        await findProfiles(client);
        

    
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

// Add functions that make DB calls here

//Read Function
async function findProfiles(client) {
  
    const result = await client.db("gs").collection("Profiles").find().toArray();

      if (result) {
        
        console.log(result);
    } else {
        console.log(`No results found!`);
    }
}