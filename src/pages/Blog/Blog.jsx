import React from 'react';

const Blog = () => {
    return (
        <div className='shadow-2xl rounded-2xl mt-10  my-10 p-10'>
            <h1 className='text-2xl font-bold py-5'> What is One way data binding?</h1>
            <p className='border-y-2 py-5 '>One-way data binding is a unidirectional data flow in web development. It ensures that data changes in the model (source) are reflected in the view (UI) but not the other way around. In this approach, the model is the single source of truth, and any changes to it automatically update the UI components, promoting data consistency. One-way data binding reduces complexity and makes it easier to manage and debug applications. Popular frameworks like React and Angular employ this approach to build interactive user interfaces. </p>
           
            <h1 className='text-2xl font-bold py-5'> What is NPM in node.js?</h1>
            <p className='border-y-2 py-5'>NPM (Node Package Manager) is a package manager for Node.js, used to install, manage, and share JavaScript libraries and tools. It simplifies package installation, version management, and dependency resolution. NPM is included with Node.js and is essential for building and maintaining Node.js projects.</p>
            <h1 className='text-2xl font-bold py-5'> Different between Mongodb database vs mySQL database.</h1>
            <p className='border-t-2 py-5'>MongoDB is a NoSQL database, while MySQL is a relational database (RDBMS). MongoDB stores data in a flexible, document-oriented format, ideal for unstructured data, and allows for horizontal scaling. MySQL uses tables with a predefined schema for structured data and is well-suited for complex transactions. The choice between them depends on data structure, scalability, and project requirements.</p>
        </div>
    );
};

export default Blog;