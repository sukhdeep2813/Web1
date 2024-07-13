
import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'

const Dashboard = ({}) => {
  return (
     <>
    <DashboardLayout title="Dashboard">

      <div>
        How are you
      </div>

      
    </DashboardLayout>
    <div><PortfolioSection/></div>
    </>
  )
}

export default Dashboard