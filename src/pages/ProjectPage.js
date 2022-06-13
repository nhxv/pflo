import mangastore from "../assets/mangastore-2.png";
import dashboard from "../assets/mangastore-admin.png";
import unique from "../assets/unique-fashion.png";
import taskmanager from "../assets/task-manager.png";
import beatup from "../assets/beatup.png";
import gan from "../assets/gans.png";

export default function ProjectPage() {
  return (
  <>
  <section className="text-neutral-100">
    <div className="px-0 md:px-12 lg:px-36 mb-4 animate fade-in-left">
      <h6 className="text-xl font-semibold">Projects I've worked on</h6>
      <p className="text-neutral-400">Please read the README.md file of each project for more details.</p>
    </div>

    <div className="container px-0 md:px-12 lg:px-36 grid grid-cols-1 lg:grid-cols-2">
      <div className="animate fade-in-left flex flex-col my-3 lg:mr-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={mangastore} alt="mangastore-client" loading="lazy" />
        </div>

        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Manga Store</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2 
            border-cyan-300 bg-neutral-800 text-cyan-300">
              React
            </span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800  border-purple-300 text-purple-300">Redux</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-green-400 text-green-400">Spring</span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800 border-neutral-300 text-neutral-300">PostgreSQL</span>
          </div>
          <p className="my-4 text-neutral-400">A manga e-commerce fullstack web application that allows users to view, search, purchase manga and print receipt.</p>
          <a href="https://github.com/nhxv/ms" target="_blank"  rel="noopener noreferrer" 
          className="link">View on Github</a>
        </div>
      </div>

      <div className="animate fade-in-right flex flex-col my-3 lg:ml-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={dashboard} alt="dashboard" loading="lazy" />
        </div>
        
        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Manga Dashboard</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2 
            border-cyan-300 bg-neutral-800 text-cyan-300">
              React
            </span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800  border-purple-300 text-purple-300">Redux</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-green-400 text-green-400">Spring</span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800 border-neutral-300 text-neutral-300">PostgreSQL</span>
          </div>
          <p className="my-4 text-neutral-400">A manga dashboard fullstack web application that allows the store owner to view, add, edit manga and process order.</p>
          <a href="https://github.com/nhxv/ms" target="_blank"  rel="noopener noreferrer"
          className="link">View on Github</a>
        </div>
      </div>

      <div className="animate fade-in-left flex flex-col my-3 lg:mr-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={unique} alt="unique-fashion" loading="lazy" />
        </div>
        
        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Clothing Store</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-red-400 text-red-400">Angular</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-green-400 text-green-400">Spring</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-neutral-300 text-neutral-300">MySQL</span>
          </div>
          <p className="my-4 text-neutral-400">A clothing e-commerce fullstack web application. This is FPT Aptech final project.</p>
          <a href="https://github.com/nhxv/uq-ecommerce" target="_blank"  rel="noopener noreferrer"
          className="link">View on Github</a>
        </div>
      </div>

      <div className="animate fade-in-right flex flex-col my-3 lg:ml-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={taskmanager} alt="task-manager" loading="lazy" />
        </div>
        
        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Task Manager</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2 
            border-red-400 bg-neutral-800 text-red-400">
              Angular
            </span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-green-400 text-green-400">Spring</span>
            <span className="my-1 mr-2 p-1 font-medium border-2 
            bg-neutral-800 border-neutral-300 text-neutral-300">MySQL</span>
          </div>
          <p className="my-4 text-neutral-400">A task management fullstack web application that allows managers to assign tasks to their employees.</p>
          <a href="https://github.com/nhxv/task-manager" target="_blank"  rel="noopener noreferrer"
          className="link">View on Github</a>
        </div>
      </div>

      <div className="animate fade-in-left flex flex-col my-3 lg:mr-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={beatup} alt="beatup" loading="lazy" />
        </div>
        
        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Beat Up</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-orange-400 text-orange-400">HTML</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-blue-400 text-blue-400">CSS</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-yellow-400 text-yellow-400">Javascript</span>
          </div>
          <p className="my-4 text-neutral-400">A web game based on one of Audition dance mode.</p>
          <a href="https://github.com/nhxv/beatup" target="_blank"  rel="noopener noreferrer"
          className="link">View on Github</a>
        </div>
      </div>

      <div className="animate fade-in-right flex flex-col my-3 lg:mr-3 bg-neutral-900">
        <div className="p-4 pb-0">
          <img src={gan} alt="gan" loading="lazy" />
        </div>
        
        <div className="p-6">
          <h6 className="font-semibold text-lg mb-1">Gan Cube</h6>
          <div className="flex flex-row flex-wrap">
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-orange-400 text-orange-400">HTML</span>
            <span className="my-1 mr-2 p-1 font-medium border-2  
            bg-neutral-800 border-blue-400 text-blue-400">CSS</span>
          </div>
          <p className="my-4 text-neutral-400">A product landing page, one of FCC web responsive design project.</p>
          <a href="https://github.com/nhxv/fcc-gan-product-landing" target="_blank"  rel="noopener noreferrer"
          className="link">View on Github</a>
        </div>
      </div>
    </div>

  </section>
  </>
  );
}