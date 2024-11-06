export const typeDefs = `#graphql
    type Author {
        id:ID! #! means the field is mandatory
        name: String!
        books: [Book] #relation to book table
    }

    type Book {
        id:ID!
        title: String!
        publishedYear: Int 
        author: Author #relation to author table
    }

    type Query { #special type which has all schema for client to get data
        authors:[Author]
        books:[Book]
    }

    type Mutation { #special type which has all schema for client to update data
        addBook( title: String! , publishedYear: Int ,authorId:ID! ): Book!    #here response is Book
    }

`