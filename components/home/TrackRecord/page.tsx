export default function TrackRecord() {
    return (
      <section className="px-2 md:px-6 py-16 lg:px-12 container bg-blue-50 mx-auto">
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Our Track Record
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-16">
            Delivering excellence across hundreds of projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Projects Delivered */}
            <div className="p-2 md:p-6 rounded-lg">
              <div className="text-blue-600 text-3xl md:text-4xl font-bold mb-4">
                200+
              </div>
              <h3 className="text-gray-900 text-xl font-semibold mb-2">
                Projects Delivered
              </h3>
              <p className="text-gray-600">
                Across various industries
              </p>
            </div>
  
            {/* Client Satisfaction */}
            <div className="m-2 md:p-6 rounded-lg">
              <div className="text-blue-600 text-3xl md:text-4xl font-bold mb-4">
                98%
              </div>
              <h3 className="text-gray-900 text-xl font-semibold mb-2">
                Client Satisfaction
              </h3>
              <p className="text-gray-600">
                Based on client feedback
              </p>
            </div>
  
            {/* Years Experience */}
            <div className="p-2 md:p-6 rounded-lg">
              <div className="text-blue-600 text-3xl md:text-4xl font-bold mb-4">
                12+
              </div>
              <h3 className="text-gray-900 text-xl font-semibold mb-2">
                Years Experience
              </h3>
              <p className="text-gray-600">
                Of digital excellence
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  