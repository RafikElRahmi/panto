import MaterialContent from './material-content';
import MaterialImages from './material-images';

function MaterialsSection() {
  return (
    <section id="shop" className="bg-white py-8 md:py-16 " aria-labelledby="materials-heading">
      <div className="grid md:grid-cols-2 gap-3">
        <MaterialContent />
        <MaterialImages />
      </div>
    </section>
  );
}

export default MaterialsSection;
