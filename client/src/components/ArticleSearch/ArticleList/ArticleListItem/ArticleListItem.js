import React, {Fragment} from 'react'
import moment from 'moment'
import './ArticleListItem.scss'
import ArticleButton from '../../../ArticleButton'


const ArticleListItem = props => (
    <Fragment>
        <tr>
        <td className='date-cell'>{moment(props.date).format('YYYY-MM-DD')}</td>
        <td>{<a href={props.url}>{props.title}</a>}</td>
        <td>{props.subtitle}</td>
        <ArticleButton 
                title = {props.title}
                date={props.date}
                url= {props.url}
                id={props.id}
                subtitle= {props.subtitle}
                saved= {props.saved}
                buttonMethod={props.buttonMethod}
                buttonText={props.buttonText}
                /></tr>
</Fragment>

)


export default ArticleListItem