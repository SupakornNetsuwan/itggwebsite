import React , { useEffect } from "react";
import { HiUserGroup , HiTrendingUp} from "react-icons/hi"
import { Tab } from "@headlessui/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css';
gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(()=>{
    gsap.to(".swipe",{
      y:-200,
      x:200,
      repeat:-1,
      duration:2,
      ease:"power4.inOut"
    })

    gsap.to(".bg5",{
      x:-20,
      repeat:-1,
      yoyo:true,
      duration:2,
      ease:"power2.inOut"
    })

    let para = [{element:".bg1",length:160},{element:".bg2",length:100},{element:".bg3",length:60},{element:".bg4",length:300},{element:".bg5",length:-100}]
    para.forEach((para, i)=>{
      gsap.to(para.element,{
        scrollTrigger:{
          trigger:".bg1",
          start:"50% 50%",
          scrub:1
        },
        y:para.length,
        opacity: [1,2,3,4].includes(i) ? 0 : 100
      })
    })

  },[])

  return (
    <>
      <div className="bg-sky flex flex-col items-center pt-14">
        <div className="relative bg-gray-50 rounded-xl p-2.5 border-2 border-gray-500 shadow-realistic overflow-hidden">
          <div className="w-6 absolute h-80 bg-white opacity-60 top-0 left-0 swipe transform -rotate-45"/>
          <img src="./images/logo.png" alt="logo" className="w-40"/>
        </div>
        <h2 className="font-Rubik text-5xl pt-6 font-bold text-gray-800">ITGG 2021</h2>
        <p className="font-Rubik text-gray-600">Infotech Tournament Gate Game</p>
      </div>
      <div className="relative bg-sky">
        <img src="./images/bgtree1.png" alt="bg1" className="relative z-50 bg1 filter drop-shadow-bg"/>
        <img src="./images/bgtree2.png" alt="bg2" className="bg-image z-40 bg2 filter drop-shadow-bg"/>
        <img src="./images/bgtree3.png" alt="bg3" className="bg-image z-30 bg3 filter drop-shadow-bg"/>
        <img src="./images/bgtree4.png" alt="bg4" className="bg-image z-40 bg4"/>
        <img src="./images/bgtree5.png" alt="bg5" className="bg-image z-0 bg5"/>
      </div>
      <div className="relative flex justify-center items-start py-20 bg-main-blue w-full min-h-screen z-50">
      <Tab.Group as="div" className="w-full md:w-auto mx-6 flex flex-col md:flex-row gap-2">
        <Tab.List className="flex md:flex-col p-2 bg-white rounded-md gap-2">
          <Tab as="div" className="w-1/2">
            {({ selected })=>(
              <button className={`${selected ? "bg-blue-50 border-gray-500" : "bg-white"}flex items-center w-full md:w-auto p-5 rounded-md border-2 relative outline-none`}>
                {selected && <div className="w-3/4 h-1 bg-blue-400 absolute rounded-br-md rounded-bl-md top-0 left-1/2 transform -translate-x-1/2"/>}
                <div className="flex justify-center gap-x-2">
                  <HiTrendingUp className={`${selected && "text-blue-400"} text-2xl inline-block`}/>
                  <span className={`${selected && "font-medium"} md:hidden text-gray-900`}>Team</span>
                </div>
              </button>
            )}
          </Tab>
          <Tab as="div" className="w-1/2">
            {({ selected })=>(
              <button className={`${selected ? "bg-gray-50 border-gray-500" : "bg-white"}flex items-center w-full md:w-auto p-5 rounded-md border-2 relative outline-none`}>
                {selected && <div className="w-3/4 h-1 bg-blue-400 absolute rounded-br-md rounded-bl-md top-0 left-1/2 transform -translate-x-1/2"/>}
                <div className="flex justify-center gap-x-2">
                  <HiUserGroup className={`${selected && "text-blue-400"} text-2xl inline-block`}/>
                  <span className={`${selected && "font-medium"} md:hidden text-gray-900`}>Person</span>
                </div>
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="bg-white w-full md:min-w-600 xl:min-w-1200 h-600 py-6 p-4 min-h-80 rounded-md">
          <Tab.Panel className="divide-y-2 text-gray-800">
            <div className="flex justify-between text-2xl px-6 pb-4">
              <p>🏆</p>
              <p className="w-24 text-right">💰</p>
            </div>
            <div className="pt-5">
              <ul className="flex flex-col">
                {[{name:"AND",score:2200,color:"#3374DC"}, {name:"OR",score:2100,color:"#5E2F7D"}, {name:"NOR",score:500,color:"#09AD0B"}, {name:"NOT",score:400,color:"#E45345"}].map((house, i)=>{
                  const {name, score, color} = house
                  const newScore = score.toString().split("").reverse().join("").match(/\d{1,3}/g).reverse().map(digits=> digits.split("").reverse().join("")).join(",")

                  return(
                    <li key={name} className="flex justify-between items-center p-2 md:mx-4 mb-2 bg-cardsky text-2xl font-medium rounded-md">
                      <div className="flex items-center gap-x-6">
                        <div className="w-14 py-4 bg-buttonselect text-center text-xl rounded-sm">{i + 1}</div>
                        <p style={{color}} className="w-24">{name}</p>
                      </div>
                      <p className="w-24 text-right text-gray-500 font-light md:font-medium">{newScore}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Tab.Panel>
          <Tab.Panel className="divide-y-2 text-gray-800 overflow-y-scroll">
            <div className="flex justify-between text-2xl px-6 pb-4">
              <p>🏆</p>
              <p className="w-24 text-right">💰</p>
            </div>
            <div className="pt-5">
              <ul className="flex flex-col">
                {[{name:"นายศุภกร เนตรสุวรรณ",score:2200}, {name:"นายมักกะโรนี ซอสเสส",score:2100}, {name:"นายบอนชอน ไก่ทรงเครื่อง",score:110}, {name:"นายมีทบอล ของอิเกีย",score:60}, {name:"นายไอติม ไอจนเจ็บคอ",score:40}].map((house, i)=>{
                  const {name, score} = house
                  const newScore = score.toString().split("").reverse().join("").match(/\d{1,3}/g).reverse().map(digits=> digits.split("").reverse().join("")).join(",")

                  return(
                    <li key={name} className="flex justify-between items-center p-2 md:mx-4 mb-2 bg-cardsky text-2xl font-medium rounded-md">
                      <div className="flex items-center gap-x-6">
                        <div className="w-14 py-4 bg-buttonselect text-center text-xl rounded-sm">{i + 1}</div>
                        <p className="font-Kanit font-normal text-sm md:text-base">{name}</p>
                      </div>
                      <p className="w-24 text-right text-gray-500 font-light md:font-medium">{newScore}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      </div>
    </>
  );
}

export default App;
