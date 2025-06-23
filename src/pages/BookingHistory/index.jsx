import SideNav from '../../components/BookingHistory/SideNav'
import BookingHistoryHeader from '../../components/BookingHistory/BookingHistoryHeader'
import Metrics from '../../components/BookingHistory/Metrics'
import BookingTable from '../../components/BookingHistory/BookingTable'

export default function BookingHistoryPage() {
  return (
    <div style={{ display: 'flex', background: '#F7F9FC', minHeight: '100vh' }}>
      <SideNav />
      <main style={{ flex: 1, marginLeft: 264 }}>
        <BookingHistoryHeader />
        <div style={{ padding: '24px 40px' }}>
          <Metrics />
          <BookingTable />
        </div>
      </main>
    </div>
  )
}