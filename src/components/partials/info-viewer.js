import {useContext} from 'react';
import {MetadataContext} from '../../contexts/metadata';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

const InfoViewer = () => {
  const {metadata} = useContext(MetadataContext);

  return (
    <div className="info-viewer animate__animated animate__fadeInDown animate__faster">
      <div className="info-viewer-inner">
        
        <FontAwesomeIcon className="info-viewer-icon" icon={faExclamationCircle} size="3x" />
        
        {metadata.statusEffects.buffs.length ||
        metadata.statusEffects.debuffs.length ||
        metadata.statusEffects.neutrals.length ? 
        <div className="status-effects-wrapper">
          <div className="status-effect-text">
            Status Effect/s
          </div>
          {metadata.statusEffects.buffs.map(buff => 
            <div key={buff.name} className="status-effect-items">
              <img className="status-effect-clipart" src={buff.imgURL} alt=""/>
              <span>&nbsp;<span className="status-effect-name">{buff.name}</span>:&nbsp;{buff.description}
              <span className="status-effect-buff">buff</span></span>
            </div>
          )}
          
          
          {metadata.statusEffects.debuffs.map(debuff => 
            <div key={debuff.name} className="status-effect-items">
              <img className="status-effect-clipart" src={debuff.imgURL} alt=""/>
              <span>&nbsp;<span className="status-effect-name">{debuff.name}</span>:&nbsp;{debuff.description}
              <span className="status-effect-debuff">debuff</span></span>
            </div>
          )}

          {metadata.statusEffects.neutrals.map(neutral => 
            <div key={neutral.name} className="status-effect-items">
              <img className="status-effect-clipart" src={neutral.imgURL} alt=""/>
              <span>&nbsp;<span className="status-effect-name">{neutral.name}</span>:&nbsp;{neutral.description}
              <span className="status-effect-neutral">neutral</span></span>
            </div>
          )}
        </div> 
        : null}

        

        <div className="tools-curses-wrapper">

          {metadata.tools.length ? 
          <div className="tools-wrapper">
            <div className="tools-text">
              Tool/s
            </div>
            {metadata.tools.map(tool => 
              <div key={tool.name} className="tools-items">
                <span>&nbsp;<span className="tool-name">{tool.name}</span>:&nbsp;{tool.description}</span>
              </div>
            )}
          </div>
          : null}

          {metadata.curses.length ? 
          <div className="curses-wrapper">
            <div className="curses-text">
              Curse/s
            </div>
            {metadata.curses.map(curse => 
              <div key={curse.name} className="tools-items">
                <span>&nbsp;<span className="tool-name">{curse.name}</span>:&nbsp;{curse.description}</span>
              </div>
            )}
          </div>
          : null}

        </div>
      </div>
    </div>
  )
};

export default InfoViewer;

