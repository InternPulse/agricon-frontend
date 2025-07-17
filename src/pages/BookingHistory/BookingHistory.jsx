import History from '../../components/BookingHistory/BookingHistory'
// import BookingTable from '../../components/BookingHistory/BookingTable'


export default function BookingHistory() {
  return (
    <div style={{ display: 'flex', background: '#F7F9FC', minHeight: '100vh' }} className='mt-20'>
      <main style={{ flex: 1,  }}>
        <div style={{ padding: '24px' }}>
          <History />
        </div>
      </main>
    </div>
  )
}