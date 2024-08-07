import { RecoilRoot, useRecoilState, useSetRecoilState, atomFamily, useRecoilValue } from 'recoil'
import './App.css'
import { SUBJECTS } from './SUBJECTS'
import { IAMARKS } from './IAMARKS'
import { creditsAtomFamily, iaMarkAtomFamily, subjectAtomFamily, sgpaAtomFamily } from './atoms'
import { SGPA } from './SGPA'

function App() {

  return (
    <>
      <RecoilRoot>
        <div style={{ display: 'flex' }}>
          <IAMarks />
          <SubjectMarks />
          <Credits />
        </div>
        {/* <CalculateSGPAButton /> */}
      </RecoilRoot >
    </>
  )
}

function IAMarks() {

  const updateIAMarks1 = useSetRecoilState(iaMarkAtomFamily(1))
  const updateIAMarks2 = useSetRecoilState(iaMarkAtomFamily(2))
  const updateIAMarks3 = useSetRecoilState(iaMarkAtomFamily(3))
  const updateIAMarks4 = useSetRecoilState(iaMarkAtomFamily(4))
  const updateIAMarks5 = useSetRecoilState(iaMarkAtomFamily(5))
  const updateIAMarks6 = useSetRecoilState(iaMarkAtomFamily(6))


  return <div style={{ padding: 40 }}>
    <h3>IA Marks</h3>
    <input type="text" required placeholder='Subject1' onChange={(e) => {
      setTimeout(() => {
        updateIAMarks1({
          id: '1',
          marks: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="text" required placeholder='Subject2 ' onChange={(e) => {
      setTimeout(() => {
        updateIAMarks2({
          id: '2',
          marks: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="text" required placeholder='Subject3' onChange={(e) => {
      setTimeout(() => {
        updateIAMarks3({
          id: '3',
          marks: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="text" required placeholder='Subject4' onChange={(e) => {
      setTimeout(() => {
        updateIAMarks4({
          id: '4',
          marks: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="text" required placeholder='Subject5' onChange={(e) => {
      setTimeout(() => {
        updateIAMarks5({
          id: '5',
          marks: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="text" required placeholder='Subject6' onChange={(e) => {
      setTimeout(() => {
        updateIAMarks6({
          id: '6',
          marks: e.target.value
        })
      }, 5000)
    }} />
  </div>
}

function SubjectMarks() {
  const updateSUBJECTS1 = useSetRecoilState(subjectAtomFamily(1))
  const updateSUBJECTS2 = useSetRecoilState(subjectAtomFamily(2))
  const updateSUBJECTS3 = useSetRecoilState(subjectAtomFamily(3))
  const updateSUBJECTS4 = useSetRecoilState(subjectAtomFamily(4))
  const updateSUBJECTS5 = useSetRecoilState(subjectAtomFamily(5))
  const updateSUBJECTS6 = useSetRecoilState(subjectAtomFamily(6))
  const normalSubject1 = useRecoilValue(subjectAtomFamily(1))
  const IAMarks1 = useRecoilValue(iaMarkAtomFamily(1))
  return <div style={{ padding: 40 }}>
    <h3>Sem End Marks</h3>
    <input type="text" required placeholder='Subject1' onChange={(e) => {
      setTimeout(() => {
        updateSUBJECTS1({
          id: '1',
          marks: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    {console.log(IAMarks1.marks)}
    <input type="text" required placeholder='Subject2' onChange={(e) => {
      setTimeout(() => {
        updateSUBJECTS2({
          id: '2',
          marks: e.target.value
        })
      }, 5000)
    }} />

    <br /><br />

    <input type="text" required placeholder='Subject3' onChange={(e) => {
      setTimeout(() => {
        updateSUBJECTS3({
          id: '3',
          marks: e.target.value
        })
      }, 5000)
    }} />

    <br /><br />

    <input type="text" required placeholder='Subject4' onChange={(e) => {
      setTimeout(() => {
        updateSUBJECTS4({
          id: '4',
          marks: e.target.value
        })
      }, 5000)
    }} />

    <br /><br />

    <input type="text" required placeholder='Subject5' onChange={(e) => {
      setTimeout(() => {
        updateSUBJECTS5({
          id: '5',
          marks: e.target.value
        })
      }, 5000)
    }} />

    <br /><br />

    <input type="text" required placeholder='Subject6' onChange={(e) => {
      setTimeout(() => {
        updateSUBJECTS6({
          id: '6',
          marks: e.target.value
        })
      }, 5000)
    }} />
  </div>
}

function Credits() {

  const updateCredits1 = useSetRecoilState(creditsAtomFamily(1))
  const updateCredits2 = useSetRecoilState(creditsAtomFamily(2))
  const updateCredits3 = useSetRecoilState(creditsAtomFamily(3))
  const updateCredits4 = useSetRecoilState(creditsAtomFamily(4))
  const updateCredits5 = useSetRecoilState(creditsAtomFamily(5))
  const updateCredits6 = useSetRecoilState(creditsAtomFamily(6))

  return <div style={{ padding: 40 }}>
    <h3>Credits</h3>
    <input type="number" min="1" max="10" required style={{ width: "150px" }} onChange={(e) => {
      setTimeout(() => {
        updateCredits1({
          id: '1',
          credits: e.target.value
        })
        // let total = ((Math.floor((IAM1.marks + (SUBM1.marks / 2)) / 10)) + 1) * CRED1;
      }, 5000)
    }} />
    <br /><br />
    <input type="number" min="1" max="10" required style={{ width: "150px" }} onChange={(e) => {
      setTimeout(() => {
        updateCredits2({
          id: '2',
          credits: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="number" min="1" max="10" required style={{ width: "150px" }} onChange={(e) => {
      setTimeout(() => {
        updateCredits3({
          id: '3',
          credits: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="number" min="1" max="10" required style={{ width: "150px" }} onChange={(e) => {
      setTimeout(() => {
        updateCredits4({
          id: '4',
          credits: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="number" min="1" max="10" required style={{ width: "150px" }} onChange={(e) => {
      setTimeout(() => {
        updateCredits5({
          id: '5',
          credits: e.target.value
        })
      }, 5000)
    }} />
    <br /><br />
    <input type="number" min="1" max="10" required style={{ width: "150px" }} onChange={(e) => {
      setTimeout(() => {
        updateCredits6({
          id: '6',
          credits: e.target.value
        })
      }, 5000)
    }} />
    {/* <>
      {console.log(Credit4)}
    </> */}
  </div>

}


export default App
