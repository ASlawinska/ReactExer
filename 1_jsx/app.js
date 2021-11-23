const header = <h1 className="title"> Witaj na stronie! </h1>;

const handleClick = () => {console.log('kliknął2');}
const main = (
  <div>
    <h1 onClick ={ function () {alert('kliknął')}}>Pierwszy artykuł</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi corporis beatae sit, quia culpa repudiandae a esse! Est suscipit perspiciatis, id deserunt sapiente ea. Excepturi numquam quia modi! Inventore!</p>
    <h1 onClick ={ () => {console.log('kliknął')}}>Drugi artykuł</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi corporis beatae sit, quia culpa repudiandae a esse! Est suscipit perspiciatis, id deserunt sapiente ea. Excepturi numquam quia modi! Inventore!</p>
    <h1 onClick ={handleClick}>Trzeci artykuł</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi corporis beatae sit, quia culpa repudiandae a esse! Est suscipit perspiciatis, id deserunt sapiente ea. Excepturi numquam quia modi! Inventore!</p>
  </div>
);
const fotter = (
  <fotter>
    <div>Stopka</div>
  </fotter>
)

const app = [header, main, fotter];
ReactDOM.render(app, document.getElementById('root'))   