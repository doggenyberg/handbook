import './info-widget.css';

const InfoWidget = () => {
  return (
    <section className="info widget">
      <p>
        Denna app är skapad för att göra TCS-livet lite enklare. Verktygen som
        finns hjälper dig steg för steg att lösa olika vanliga fel, skriva
        tydliga och informella eskaleringsbeskrivningar till andra
        supportgrupper samt ger dig tillgång till användbara länkar och mallar.{" "}
        <br />
        <br />
        Stöter du på någon bugg eller har synpunkter på hur appen kan utvecklas
        kan du hojta till mig eller använda knappen längst ned till vänster.
      </p>
    </section>
  );
};

export default InfoWidget;
