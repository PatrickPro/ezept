import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import logo from './images/logos/logoEzept.png'

class RegistrationPage3 extends Component {
  render () {
    return (
            <div className="App">
              <header className="App-header">
                {<img src= {logo} className="App-logo" alt="logo" />}
              </header>
              <style>{`
                body > div,
                body > div > div,
                body > div > div.login-form {
                  height: 110%;
                }
                `}</style>
              <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' textAlign='center'>
                Anamnesis
              </Header>
              <Form size='large'>
               <Segment stacked>
               <p align='justify'>1) Ich bin familiär gehäufte Erkrankungen bei Verwandten 1. oder 2. Grades aufgetreten (Herz, Kreislauf, Nieren, Stoffwechsel, Tumor, Nerven und psychische Erkrankungen oder Erbkrankheiten)?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/>
               </p>

               <p align='justify'>2) Haben Gesundheitsstörungen oder Verletzungen Folgen hinterlassen, die die Gesundheit oder Arbeitsfähigkeit beeinträchtigen?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/>
               </p>

               <p align='justify'>3) Besteht eine anerkannte Behinderung/Invalidität, z.B. nach dem Schwerbehindertengesetz?</p>
               <ul>
               <li align='justify'> Des Gehirns oder Rückenmarks, der Nerven, auch Epilepsie, Multiple Sklerose, Lähmungen oder Symptome wie Gefühlsstörungen, Krämpfe, Tremor, Ohnmachten, Schwindel, Migräne, häufige oder schwere Kopfschmerzen?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/> </li>

               <li align='left'> Der Psyche, auch Psychosen, Depressionen, Angst, Schlaf oder Essstörungen, Erschöpfungszustände, psychosomatische Erkrankungen, Aufmerksamkeitsdefizit und Hyperaktivitätssyndrom (ADHS)?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/> </li>

               <li align='justify'> In Form von schweren, häufig rezidivierenden oder chronischen Infektionskrankheiten (auch Geschlechts und Tropenkrankheiten) oder Autoimmunerkrankungen?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/> </li>

               <li align='justify'> In Form von gut oder bösartigen Tumorbildungen, auch Hautkrebs, Lymphome oder Leukämien?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/> </li>
               </ul>


               <p align='justify'>4) Bestehen oder bestanden Krankheiten oder Beschwerden?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/>
               </p>

               <p align='justify'>5) Werden oder wurden regelmäßig alkoholische Getränke konsumiert (d.h. mehr als 1 Monat lang täglich oder an mehr als der Hälfte der Tage eines Jahres)?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/>
               </p>

               <p align='justify'>6) Werden oder wurden Drogen oder Betäubungsmittel eingenommen oder anders zugeführt?
               <Checkbox label='Ja'/>
               <Checkbox label='Nein'/>
               </p>

                <Link
                  to={'/register/2'}><Button primary type='submit' >Back</Button>
                </Link>
                <Button primary type='submit'
                        onClick={() => {window.location = 'https://10.19.1.178:4443/src/videocall.html'}}>Connect
                  Me</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}

export default withRouter(RegistrationPage3)
