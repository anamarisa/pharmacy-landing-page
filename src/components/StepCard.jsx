export default function StepCard({ step, title, children }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">
            {step}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{children}</p>
          </div>
        </div>
      </div>
    );
  }