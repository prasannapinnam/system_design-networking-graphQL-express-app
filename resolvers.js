//sample data as we dont have DB
const data = {
    authors: [
        //see how authors are rltd to books via book ID's
      { id: "1", name: "lakshmi", bookIds: ["101", "102"] }, 
      { id: "2", name: "prasanna", bookIds: ["103"] },
    ],
    books: [
        //see how books are related to authors with author id's
      { id: "101", title: "Book 1", publishedYear: 2000, authorId: "1" },
      { id: "102", title: "Book 2", publishedYear: 2010, authorId: "1" },
      { id: "103", title: "Book 3", publishedYear: 2020, authorId: "2" },
    ],
  };
  

// here we are gonna define on hitting wat query in typedefs wat function has to be hit 
//inside functions we hit API's we wanted
export const resolvers = {
    //fetching authordetails of a book
    Book : {
        author: (parent, args, context, info) => {
            return data.authors.find(authorDetails => authorDetails.id === parent.authorId);
        }
    },
    
    //fetching all books written by an author 
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id))
        }
    },

    Query : {
        //client getting list of authors
        authors : (parent, args, context, info) => {
            return data.authors
        },

        //client getting list of books
        books : (parent, args, context, info) => {
            return data.books
        }
    },

    Mutation:{
        addBook: (parent, args, context, info) => {
            console.log(args);
            const newBookInfo = {...args,id:Math.floor(Math.random()*100)};
            data.books.push(newBookInfo);
            return newBookInfo;
        }
    }
}