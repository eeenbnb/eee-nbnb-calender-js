let setCalendar = (dom,year,month,data)=>{
  dom.textContent = null;
  let week = ["日","月","火","水","木","金","土"];
  let headerDom = document.createElement("div");
  headerDom.classList.add("s-calendar-header");
  dom.appendChild(headerDom);

  week.forEach(v=>{
    let p = document.createElement('p');
    p.classList.add("s-calendar-header-one");
    p.innerText = v;
    headerDom.appendChild(p);
  });

  const date = new Date(`${year}-${month}-01`);
  let startIndex = date.getDay();
  for(let week = 0;week < 5;week++){
    let weekDom = document.createElement("div");
    weekDom.classList.add("s-calendar-one-week");
    dom.appendChild(weekDom);
    for(let day = 0; day< 7;day++){
      let dayDom = document.createElement("div");
      dayDom.classList.add("s-calendar-one-week-one");
      if(!(week == 0 && startIndex > day) && date.getMonth() + 1 == month){
        dayDom.innerText = date.getDate();
        if(data[date.getDate()]){
          data[date.getDate()].forEach((v)=>{
            let label = document.createElement("div");
            label.classList.add("s-calendar-one-week-one-label");
            label.innerText = v;
            dayDom.appendChild(label);
          })
        }
        date.setDate(date.getDate() + 1);
      }
      weekDom.appendChild(dayDom);
    }
  }
}

export default setCalendar;
