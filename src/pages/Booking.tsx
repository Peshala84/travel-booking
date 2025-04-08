import { useState } from 'react';
import { Calendar, Users, CreditCard, Plane, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

type BookingStep = 'package' | 'details' | 'payment' | 'confirmation';

interface TravelPackage {
  id: number;
  title: string;
  duration: string;
  price: number;
  image: string;
  description: string;
}

const packages: TravelPackage[] = [
  {
    id: 1,
    title: "European Adventure",
    duration: "15 Days",
    price: 3499,
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89",
    description: "Explore the best of Europe including Paris, Rome, and Barcelona."
  },
  {
    id: 2,
    title: "Asian Discovery",
    duration: "12 Days",
    price: 2899,
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    description: "Experience the rich culture and traditions of Japan, Korea, and Thailand."
  },
  {
    id: 3,
    title: "Tropical Paradise",
    duration: "8 Days",
    price: 1999,
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19",
    description: "Relax on pristine beaches in the Caribbean islands."
  }
];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState<BookingStep>('package');
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: '2',
    date: '',
    specialRequests: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  const steps = [
    { id: 'package', title: 'Select Package', icon: Plane },
    { id: 'details', title: 'Travel Details', icon: Users },
    { id: 'payment', title: 'Payment', icon: CreditCard },
    { id: 'confirmation', title: 'Confirmation', icon: CheckCircle }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    const stepIndex = steps.findIndex(step => step.id === currentStep);
    if (stepIndex < steps.length - 1) {
      setCurrentStep(steps[stepIndex + 1].id as BookingStep);
    }
  };

  const handleBack = () => {
    const stepIndex = steps.findIndex(step => step.id === currentStep);
    if (stepIndex > 0) {
      setCurrentStep(steps[stepIndex - 1].id as BookingStep);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'package':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedPackage?.id === pkg.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedPackage(pkg)}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{pkg.duration}</span>
                    </div>
                    <span className="text-xl font-bold text-blue-600">${pkg.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'details':
        return (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Travelers
                </label>
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travel Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{selectedPackage?.title}</p>
                    <p className="text-gray-600">{formData.travelers} travelers</p>
                  </div>
                  <p className="text-xl font-bold text-blue-600">
                    ${selectedPackage ? selectedPackage.price * parseInt(formData.travelers) : 0}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-6">Payment Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'confirmation':
        return (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-500 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for booking with us. Your confirmation has been sent to {formData.email}
              </p>
              <div className="bg-gray-50 rounded-lg p-6 text-left">
                <h4 className="font-semibold mb-4">Booking Details:</h4>
                <div className="space-y-2">
                  <p><span className="font-medium">Package:</span> {selectedPackage?.title}</p>
                  <p><span className="font-medium">Travel Date:</span> {formData.date}</p>
                  <p><span className="font-medium">Travelers:</span> {formData.travelers}</p>
                  <p><span className="font-medium">Total Amount:</span> ${selectedPackage ? selectedPackage.price * parseInt(formData.travelers) : 0}</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05")'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Book Your Dream Vacation
            </h1>
            <p className="text-xl text-white animate-slide-up">
              Your next adventure is just a few clicks away
            </p>
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index < steps.findIndex(s => s.id === currentStep)
                    ? 'text-blue-600'
                    : index === steps.findIndex(s => s.id === currentStep)
                    ? 'text-blue-600'
                    : 'text-gray-400'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= steps.findIndex(s => s.id === currentStep)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200'
                  }`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm mt-2">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 w-24 mx-4 ${
                    index < steps.findIndex(s => s.id === currentStep)
                      ? 'bg-blue-600'
                      : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between max-w-3xl mx-auto">
          {currentStep !== 'package' && (
            <button
              onClick={handleBack}
              className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
          )}
          {currentStep !== 'confirmation' && (
            <button
              onClick={handleNext}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-auto"
              disabled={currentStep === 'package' && !selectedPackage}
            >
              {currentStep === 'payment' ? 'Confirm Booking' : 'Next'}
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}