import React from 'react';
function Portfolio() {

  const gordon = "09/2020 – now	  Mississauga, ON, Canada \n-	Technical Support in Canada \n-	Managed project schedule, budget and deliverables \n-	Risk Management: throughout the project lifecycle, identify and plan contingencies for risks to time, quality or budget from project. \n-	Tracking of project performance and carry out project evaluation. \n "
  const peninsula="01/2015 – 07/2020 Hong Kong\nLuxury 5 Stars Hotel\n- New Hotel Project in London, Istanbul & Yangon. \n- Renovation Hotel Project in Chicago, New York, Beijing.\n- Managed project schedule, budget and deliverables\n- Direct the technology direction for platform and hardware for the product lines.\n- Develop and design new generation of the guest room system and manufacturing processes from concept to specifications and implementation.\n- Risk Management: throughout the project lifecycle, identify and plan contingencies for risks to time, quality or budget from project.\n- Tracking of project performance and carry out project evaluation. \n"
  const inncom="01/2010 – 12/2014 Niantic, CT, US\n- The World Leading Energy Managing System\n- Technical Support for Asia Pacific & Europe Region (Travel over 20+ Countries)\n- Work with R&D Development on design of appropriate enhancements of products\n- Tracking of project performance and carry out project evaluation \n- Monitor support activity and actively seeks ways to improve productivity and customer satisfaction\n"
  const avt="08/2007 – 10/2009	Hong Kong\n- Technical Support the partners/ Dealers in Asia Pacific & Europe.\n- Project management (single project size more than US$ 6.5M), planning, ATI port (Philippine) PAT port (Thailand), PSA (Singapore), Nutech(Dubai airport).\n- Managed project schedule, budget and deliverables\n- Tracking of project performance and carry out project evaluation.\n- Design the CCTV system for Container Number Recognition System and License Plate Number Recognition System at the border and port."
  const esmart="09/2005 – 10/2009 Hong Kong\n- Technical Support the partners/ Dealers in Asia Pacific & China\n- Leading R&D Team design product & software for Access Control system \n- Provide pre-sale and after sale support for sales team to keep business growth and able to meet company’s target. \n- Project management\n- Managed project schedule, budget and deliverables\n- Tracking of project performance and carry out project evaluation."
  const government="- Hong Kong International airport, (over 3500 cameras)\n- Electrical and Mechanical Services Department of Hong Kong Government (EMSD), \n- MTR Subway (HK), \n- Highway Route 3 HIDC, \n- River Trade Terminal Port (RTTC), \n- ATI Port (Philippine) \n- PAT Port (Thailand), \n- PSA Port (Singapore), \n- ACT Port (Jordan), \n- Nutech (Dubai Airport)"
  const hotel="- Four Season, \n- Starwood, \n- Fairmount, \n- IHG, \n- Hyatt, \n- Mandarin Oriental, \n- Sheraton, \n- Hilton, \n- Marriot, \n- Oberoi, \n- Langham, \n- Jumeriah"
  const developers= "- Sino group, \n- Paliburg Group, \n- Nanfung Property, \n- Shum Tak, \n- Cheung Kong, \n- Chinachem Group, \n- Henderson Land Development, \n- Ka Wah Real Estate, \n- New world Development"
  const skill="- Burglar Alarm System,\n- CCTV System,\n- Access Control System\n- Public Announcement System\n- Background System,\n- Structured cabling System\n- Wi-Fi System\n- IOT Solution\n- Guest Room Control System\n- SMATV System\n- HVAC System\n- Audio Visual System (Home Theater)\n- Container Number Recognition System\n- Lighting Control System\n- Home Automation System "
  const c_skill="- C++/C#\n- Visual C,\n- Visual Basic,\n- Python,\n- JavaScript,\n- Node JS,\n- HTML /CSS,\n- MQTT,\n- Pearl, \n- Java, \n- Microsoft Windows, \n- Microsoft Word, \n- Microsoft Excel, \n- Microsoft Access, \n- Microsoft Project, \n- PowerPoint, \n- SQL"


  return (
    <section className="my-5">
      <a href="/files/resume_2022.pdf" target="_blank" download>Download my resume</a>
      <div className="my-2">
        <h5>Project Manager</h5>
        <h6>Gordon R. Williams Corporation</h6>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {gordon} </p>
      </div>
      <div className="my-2">
        <h5>Project & maintenance Manager</h5>
        <h6>The Hong Kong And Shanghai Hotel Limited (The Peninsula Hotel)</h6>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {peninsula} </p>
      </div>
      <div className="my-2">
        <h5>Technical Manager</h5>
        <h6>INNCOM International Inc.(Honeywell Ltd)</h6>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {inncom} </p>
      </div>
      <div className="my-2">
        <h5>Project Manager</h5>
        <h6>Asia Vision Technology Limited</h6>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {avt} </p>
      </div>
      <div className="my-2">
        <h5>Project Manager</h5>
        <h6>eSmart System Limited</h6>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {esmart} </p>
      </div>
      <div className="my-2">
        <h5>Project Reference</h5>
        <h6>Government</h6>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {government} </p>
        <h6>Hotel group</h6>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {hotel} </p>
        <h6>Property developers</h6>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {developers} </p>
      </div>
      <div className="my-2">
        <h5>Technical Skill</h5>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {skill} </p>
      </div>
      <div className="my-2">
        <h5>Computer Skill</h5>
        <div className="display-linebreak"> </div>
        <p className="display-linebreak"> {c_skill} </p>
      </div>
    </section>
  );
}

export default Portfolio;
