import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from './_db.js';



const resolvers ={
    Query : {
        games(){
            return db.games
        },
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        },
        review(_,args){
            return db.reviews.find((review)=> review.id === args.id)
        },
        game(_,args){
            return db.games.find((game)=> game.id === args.id)
        },
        author(_,args){
            return db.authors.find((author)=> author.id === args.id)
        }
    },
    Game:{
        reviews(parent){
            return db.reviews.filter((r)=>r.game_id === parent.id)
        }
    }
}

//server setup
const port = 4000
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: port },
});

console.log('server is ready on port ' + port);