import React from "react";
function Card({color}){
    
    
  let img = "https://imgs.search.brave.com/WLTEpoyxZGFG6Em-n9-6KkUBO6i8XMHE6obTAxmuVgY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yODg1LzI4ODU1/MDQucG5nP3NlbXQ9/YWlzX2h5YnJpZA"

    return(

         <div className={color} class="mx-auto flex max-w-sm items-center gap-x-4 m-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-12 shrink-0" src={img} alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium dark:text-white}"></div>
    
  </div>
</div>

    )
}

export default Card;