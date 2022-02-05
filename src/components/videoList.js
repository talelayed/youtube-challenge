

function VideoList() {
   const videos=[{
     srcvideo:"https://www.youtube.com/embed/u4D33yfWdvQ",
     title:"مسلسل شوفلي حل - الموسم 2008 - الحلقة السادسة والعشرون"
   },
   {
    srcvideo:"https://www.youtube.com/embed/u4D33yfWdvQ",
    title:"مسلسل شوفلي حل - الموسم 2008 - الحلقة السادسة والعشرون"
  },
  {
    srcvideo:"https://www.youtube.com/embed/u4D33yfWdvQ",
    title:"مسلسل شوفلي حل - الموسم 2008 - الحلقة السادسة والعشرون"
  },
  {
    srcvideo:"https://www.youtube.com/embed/u4D33yfWdvQ",
    title:"مسلسل شوفلي حل - الموسم 2008 - الحلقة السادسة والعشرون"
  }]
  return (
   <>
  {
    videos.map((el)=>(

      <>
      <iframe width="300" height="200" src={el.srcvideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
      <p>{el.title}</p>
      </>
    ))
  }
   </>
  );
}

export default VideoList;
