import React from 'react'
import { Redirect } from '@reach/router' // highlight-line
import { injectIntl } from "gatsby-plugin-intl"

const Index = (props) => <Redirect to={`${props.intl.locale}/nouveautes/`}/>

export default injectIntl(Index)
