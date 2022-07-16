import skill from './Skill.module.css'

export default function Skill(props){

    return (
        <div className={skill.Skill}>
            {props.val}
        </div>
    )
}