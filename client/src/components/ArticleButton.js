import React, {Fragment} from 'react'


const ArticleButton = props => (
    <Fragment>
        <td><button className={props.saved ? 'btn-saved' : 'btn-action'} onClick={() => props.buttonMethod(
            {
                title: props.title,
                date: props.date,
                url: props.url,
                subtitle: props.subtitle,
                saved: true,
            }
        )}>{(props.saved 
        ? "Saved!" 
        : "Save")}</button></td>

</Fragment>

)


export default ArticleButton