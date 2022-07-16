import { useState } from 'react';
import Skill from '../Components/Skill';
import work from './Work.module.css';

function showSkill(ele){
    return <Skill val={ele} />
}

export default function Work(props){
    const len = (props.projects).length;
    
    
    const [currproject,setCurrproject]= useState(0);
    function showPrevious(){
        if(currproject>0){
            setCurrproject(currproject-1);
        }
        
    }
    function showNext(){
       if(currproject<len){
        setCurrproject(currproject+1);
       }
    }
    return(
        <div className={work.Work}>
            
            {/* Projects section with  hidden scrollbar  effect */}
            
            <div className={work.Projects}>
                    {/* loop in props.projects, make image slider */}  
                    {/* ṣend data as it is, i.e projectlist={props.projects} this data only contains screenshots and url to hosted projects */}
                    <span className={work.projectNo}></span>
            </div>

            {/* Skills */}
            <div className={work.SkillLangs}>
                <div className={work.Headers}>
                    Skills
                </div>
                <div className={work.Lists}>
                    {(props.skills).map(showSkill)}
                </div>
                    
            </div>
        

            
            

        
            {/* Languages */}
            <div style={{textAlign:"right",backgroundColor:"white",height:"35vh"}} className={work.SkillLangs}>
                    {/* loop in props.skills  array*/}
                <div className={work.Headers}>
                    Languages <br/>
                    i know
                </div>
                <div className={work.Lists}>
                    <div className={work.lang}>
                        Punjabi
                    </div>
                    <div className={work.lang}>
                        Hindi
                    </div>
                    <div className={work.lang}>
                        English
                    </div>
                </div>
                    
            </div>
        
            {/* loop in props.language  array*/}
        </div>
    )
}