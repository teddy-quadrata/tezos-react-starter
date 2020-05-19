import React from 'react'
import { ToastProvider } from 'react-toast-notifications'

import { Header } from '../components/header.component'
import { ContractBalance } from '../components/contractBalance'
import { ContractActions } from '../components/contractActions'
import { ConnectedNetwork } from '../state/connected.context'

export const HomePage = () => {
  return (
    <ToastProvider>
      <ConnectedNetwork>
        <Header />
        <div className="container" style={{ marginTop: '30px' }}>
          <div className="row">
            <div className="col-6 is-right">
              <ContractBalance />
            </div>
            <div className="col-6">
              <ContractActions />
            </div>
          </div>{' '}
        </div>
      </ConnectedNetwork>
    </ToastProvider>
  )
}