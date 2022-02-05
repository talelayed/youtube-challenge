
function Comments() {
    const com = [{
        name : "lorem",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, suscipit."
    },
    {
        name : "lorem",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, suscipit."
    },
    {
        name : "lorem",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, suscipit."
    },
    {
        name : "lorem",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, suscipit."
    },
    {
        name : "lorem",
        desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, suscipit."
    }

    ]
  return (
   <>
  <h1>comments</h1>
   {
       
       com.map((el) => (
           <>
           <div className="comment">
           <h3>
               {el.name}
           </h3>
           <p>
               {el.desc}
           </p>
           </div>
        </>
       ))
   }
 </>

  );
}

export default Comments;
