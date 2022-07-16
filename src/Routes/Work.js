import work from './Work.module.css';
export default function Work(props){
    return(
        <div className={work.Work}>

            {/* Skills */}
            <div className={work.Skills}>
                    {/* loop in props.skills  array*/}
            </div>
        

            {/* Projects section with  hidden scrollbar  effect */}
            
            <div className={work.Projects}>
                    {/* loop in props.projects */}
                    
            </div>
        
            {/* Languages */}
            <div className={work.Languages}>
                    {/* loop in props.skills  array*/}
            </div>
        
            {/* loop in props.language  array*/}
        </div>
    )
}