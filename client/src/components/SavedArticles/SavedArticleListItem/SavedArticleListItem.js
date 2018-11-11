import React, {Fragment} from 'react'
import moment from 'moment'
import './SavedArticleListItem.scss'
import SavedArticleButton from '../SavedArticleButton'


const SavedArticleListItem = props => (
    <Fragment>
        <tr>
        <td className='date-cell'>{moment(props.date).format('YYYY-MM-DD')}</td>
        <td>{<a href={props.url}>{props.title}</a>}</td>
        <td>{props.subtitle}</td>
        <SavedArticleButton 
                title = {props.title}
                date={props.date}
                url= {props.url}
                id={props.id}
                subtitle= {props.subtitle}
                saved= {props.saved}
                buttonMethod={props.buttonMethod}
                /></tr>
</Fragment>
)


export default SavedArticleListItem 