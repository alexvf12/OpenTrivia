import Setting from './Setting';

const Settings = () => {
  return (
    <div className='content container'>
      <Setting property='number' text='Number of questions' first='6' second='12' third='20' />
      {/* TODO #9
      /// Afegeix un nou element que permeti a l'usuari triar la categoria de les preguntes a mostrar. */}
      <Setting property='difficulty' text='Difficulty' first='Easy' second='Medium' third='Hard' />
      
      <Setting property='category' text='Category' first='Sports' second='Geography' third='General Knowledge' />
    </div>
  );
};

export default Settings;
