const blogs = [
  {
    question: "Difference between SQL and NoSQL",
    answer:
      "sql databases have fixed or static or predefined schema, nosql databases have dynamic schema, sql databases are not suited for hierarchical data storage but nosql databases are best suited for hierarchical data storage, sql databases are best suited for complex queries and nosql databases are not so good for complex queries, sql database is vertically scalable but no sql are horizontally scalable, sql follows ACID property and nosql follows CAP(consistency, availablity,partition,tolerance)",
  },
  {
    question: "What is JWT, and how does it work",
    answer:
      "JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. ",
  },
  {
    question: "What is the difference between javascript and NodeJS",
    answer:
      "NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. and Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. ",
  },
  {
    question: "How does NodeJS handle multiple requests at the same time",
    answer:
      "NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. ",
  },
];
export default blogs;
