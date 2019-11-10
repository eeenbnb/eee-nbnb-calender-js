## how to use;
```
<script type="module">
  import setCalendar from '/src/calendar.js';
  document.addEventListener("DOMContentLoaded", function(event) {
    let calendarDom = document.body.querySelector("#calendar");
    setCalendar(calendarDom,2019,12,{25:["クリスマス"]});
  });
</script>

<style>
  :root{
    --e-calendar-color: #6c757d /* calendar border color*/
  }
</style>

<link rel="stylesheet" href="/calendar.css">

...

<div class="s-calendar" id="calendar"></div>
```

## sample;
https://eeenbnb.github.io/eee-nbnb-calender-js/src/sample.html
