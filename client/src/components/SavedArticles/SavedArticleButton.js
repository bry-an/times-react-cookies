import React, {Fragment} from 'react'


const SavedArticleButton = props => (
    <Fragment>
        <td><button className={props.saved 
                ? 'btn-saved' 
                : 'btn-action'} 
                onClick={() => props.buttonMethod(
            {
                title: props.title,
                date: props.date,
                url: props.url,
                subtitle: props.subtitle,
                saved: true,
                id: props.id 
            }
        )}>Delete</button></td>
</Fragment>

)


export default SavedArticleButton