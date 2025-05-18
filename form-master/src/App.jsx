
import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {
    const handleSignupSubmit = data => {
        console.log(data)
    }
    const handleUpdateProfile = data => {
       console.log(data)
    }

  return (
    <>
    {/* <SimpleForm></SimpleForm> */}
    {/* <StatefullForm></StatefullForm> */}
    {/* <RefForm></RefForm> */}
    {/* <HookForm></HookForm> */}
    <ReusableForm formTitle={'Signup'} btnText='Signup' handleSubmit={handleSignupSubmit}>
      <div>
        <h2>Please Sigup</h2>
      </div>
    </ReusableForm>
    <ReusableForm formTitle={'ProfileUpdate'} btnText='Update' handleSubmit={handleUpdateProfile}>
      <div>
        <h2>Please Update</h2>
      </div>
    </ReusableForm>
    </>
  )
}

export default App
