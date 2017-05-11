import React from 'react'
import {
  connect
} from 'react-redux'
import {
  selectCurrentUri,
} from 'selectors/app'
import {
  selectCurrentUriFileInfo,
  selectCurrentUriIsDownloaded,
} from 'selectors/file_info'
import {
  selectCurrentUriClaim,
} from 'selectors/claims'
import {
  selectCurrentUriCostInfo,
} from 'selectors/cost_info'
import FilePage from './view'

const select = (state) => ({
  claim: selectCurrentUriClaim(state),
  uri: selectCurrentUri(state),
  isDownloaded: selectCurrentUriIsDownloaded(state),
  fileInfo: selectCurrentUriFileInfo(state),
  costInfo: selectCurrentUriCostInfo(state),
})

const perform = (dispatch) => ({
})

export default connect(select, perform)(FilePage)
