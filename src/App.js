import './App.css';
import { useRef, useState } from 'react';
import Card from './Card';
import CardGroup from './CardGroup';
import CardUser from './CardUser';
import source from './source.json';
import database from './firebase';
function App() {

  const identification = useRef(null);
  const init = useRef(null);
  const groupa = useRef(null);
  const groupb = useRef(null);
  const groupc = useRef(null);
  const groupd = useRef(null);
  const groupe = useRef(null);
  const groupf = useRef(null);
  const groupg = useRef(null);
  const group1 = useRef(null);
  const group2 = useRef(null);
  const group3 = useRef(null);
  const group4 = useRef(null);
  const group5 = useRef(null);

  const [data, setData] = useState(source);
  const [name, setName] = useState('');

  const scrollSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollSectioninit = () => scrollSection(init);
  const scrollSectiona = () => scrollSection(groupa);
  const scrollSectionb = () => scrollSection(groupb);
  const scrollSectionc = () => scrollSection(groupc);
  const scrollSectiond = () => scrollSection(groupd);
  const scrollSectione = () => scrollSection(groupe);
  const scrollSectionf = () => scrollSection(groupf);
  const scrollSectiong = () => scrollSection(groupg);
  const scrollSection1 = () => scrollSection(group1);
  const scrollSection2 = () => scrollSection(group2);
  const scrollSection3 = () => scrollSection(group3);
  const scrollSection4 = () => scrollSection(group4);
  const scrollSection5 = () => scrollSection(group5);

  const handleChangeRadio = (e) => {

    let sourced = data;
    sourced[e.currentTarget.dataset.group][e.currentTarget.dataset.index] = { ...sourced[e.currentTarget.dataset.group][e.currentTarget.dataset.index], win: e.target.value }
    setData(sourced);
  }

  const handleChangeCheck = (e) => {
    let sourced = data;
    let validate = false;
    if (e.currentTarget.dataset.category === "Q8") {
      let total = sourced[e.currentTarget.dataset.category][e.currentTarget.dataset.group].filter(q => q.win === "1").length;
      validate = total < 2;
    }
    if (e.currentTarget.dataset.category === "Q4") {
      let total = sourced[e.currentTarget.dataset.category][e.currentTarget.dataset.group].filter(q => q.win === "1").length;
      validate = total < 1;
    }

    if (e.currentTarget.dataset.category === "Q2") {
      let total = 0;
      for (const key in sourced[e.currentTarget.dataset.category]) {
        if (Object.hasOwnProperty.call(sourced[e.currentTarget.dataset.category], key)) {
          const element = sourced[e.currentTarget.dataset.category][key].filter(q => q.win === "1").length;
          total += element;
        }
      }
      validate = total < 5;
    }

    if (e.currentTarget.dataset.category === "Q1") {
      let total = 0;
      for (const key in sourced[e.currentTarget.dataset.category]) {
        if (Object.hasOwnProperty.call(sourced[e.currentTarget.dataset.category], key)) {
          const element = sourced[e.currentTarget.dataset.category][key].filter(q => q.win === "1").length;
          total += element;
        }
      }
      validate = total < 2;
    }

    if (e.currentTarget.dataset.category === "Q0") {
      let total = 0;
      for (const key in sourced[e.currentTarget.dataset.category]) {
        if (Object.hasOwnProperty.call(sourced[e.currentTarget.dataset.category], key)) {
          const element = sourced[e.currentTarget.dataset.category][key].filter(q => q.win === "1").length;
          total += element;
        }
      }
      validate = total < 1;
    }

    if (validate) {
      if (e.target.checked) {
        sourced[e.currentTarget.dataset.category][e.currentTarget.dataset.group][e.currentTarget.dataset.index] = { ...sourced[e.currentTarget.dataset.category][e.currentTarget.dataset.group][e.currentTarget.dataset.index], win: e.target.value }
      } else {
        sourced[e.currentTarget.dataset.category][e.currentTarget.dataset.group][e.currentTarget.dataset.index] = { ...sourced[e.currentTarget.dataset.category][e.currentTarget.dataset.group][e.currentTarget.dataset.index], win: "0" }
        e.target.checked = false;
      }

    } else {
      sourced[e.currentTarget.dataset.category][e.currentTarget.dataset.group][e.currentTarget.dataset.index] = { ...sourced[e.currentTarget.dataset.category][e.currentTarget.dataset.group][e.currentTarget.dataset.index], win: "0" }
      e.target.checked = false;
    }

    setData(sourced);
  }

  return (
    <div>
      <section ref={identification}>
        <CardUser
          name="Polla mundialera"
          handle={setName}
          section={scrollSectioninit} />
      </section>
      {name !== "" &&
        <>
          <section ref={init}>
            <Card
              source={data["groupa"]}
              handle={handleChangeRadio}
              group="groupa"
              name="Grupo A"
              section={scrollSectiona} />
          </section>
          <section ref={groupa}>
            <Card
              source={data["groupb"]}
              handle={handleChangeRadio}
              group="groupb"
              name="Grupo B"
              section={scrollSectionb} />
          </section>
          <section ref={groupb}>
            <Card
              source={data["groupc"]}
              handle={handleChangeRadio}
              group="groupc"
              name="Grupo C"
              section={scrollSectionc} />
          </section>
          <section ref={groupc}>
            <Card
              source={data["groupd"]}
              handle={handleChangeRadio}
              group="groupd"
              name="Grupo D"
              section={scrollSectiond} />
          </section>
          <section ref={groupd}>
            <Card
              source={data["groupe"]}
              handle={handleChangeRadio}
              group="groupe"
              name="Grupo E"
              section={scrollSectione} />
          </section>
          <section ref={groupe}>
            <Card
              source={data["groupf"]}
              handle={handleChangeRadio}
              group="groupf"
              name="Grupo F"
              section={scrollSectionf} />
          </section>
          <section ref={groupf}>
            <Card
              source={data["groupg"]}
              handle={handleChangeRadio}
              group="groupg"
              name="Grupo G"
              section={scrollSectiong} />
          </section>
          <section ref={groupg}>
            <Card
              source={data["grouph"]}
              handle={handleChangeRadio}
              group="grouph"
              name="Grupo H"
              section={scrollSection1} />
          </section>
          <section ref={group1}>
            <CardGroup
              source={data["Q8"]}
              name="Octavos"
              category="Q8"
              handle={handleChangeCheck}
              section={scrollSection2} />
          </section>
          <section ref={group2}>
            <CardGroup
              source={data["Q4"]}
              name="Cuartos"
              category="Q4"
              handle={handleChangeCheck}
              section={scrollSection3} />
          </section>
          <section ref={group3}>
            <CardGroup
              source={data["Q2"]}
              name="Semifinal"
              category="Q2"
              handle={handleChangeCheck}
              section={scrollSection4} />
          </section>
          <section ref={group4}>
            <CardGroup
              source={data["Q1"]}
              name="Final"
              category="Q1"
              handle={handleChangeCheck}
              section={scrollSection5} />
          </section>
          <section ref={group5}>
            <CardGroup
              source={data["Q0"]}
              name="Campe&oacute;n"
              category="Q0"
              handle={handleChangeCheck}
              section={() => {
                database.ref("players/"+name.replace(" ","")).set(data).catch((e) => { console.log(e) })
              }} />
          </section>
        </>
      }
    </div>
  );
}

export default App;
