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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{pkg.title}</h3>
                  <p className="mb-4 text-gray-600">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
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
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Number of Travelers
                </label>
                <select
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Travel Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Order Summary</h3>
                <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div>
                    <p className="font-medium">{selectedPackage?.title}</p>
                    <p className="text-gray-600">{formData.travelers} travelers</p>
                  </div>
                  <p className="text-xl font-bold text-blue-600">
                    ${selectedPackage ? selectedPackage.price * parseInt(formData.travelers) : 0}
                  </p>
                </div>
              </div>

              <h3 className="mb-6 text-xl font-semibold">Payment Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Booking Confirmed!
              </h3>
              <p className="mb-6 text-gray-600">
                Thank you for booking with us. Your confirmation has been sent to {formData.email}
              </p>
              <div className="p-6 text-left rounded-lg bg-gray-50">
                <h4 className="mb-4 font-semibold">Booking Details:</h4>
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
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl animate-fade-in">
              Book Your Dream Vacation
            </h1>
            <p className="text-xl text-white animate-slide-up">
              Your next adventure is just a few clicks away
            </p>
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className="px-4 py-12 mx-auto max-w-7xl">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
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
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="mt-2 text-sm">{step.title}</span>
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
              className="flex items-center px-6 py-3 text-gray-700 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
          )}
          {currentStep !== 'confirmation' && (
            <button
              onClick={handleNext}
              className="flex items-center px-6 py-3 ml-auto text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              disabled={currentStep === 'package' && !selectedPackage}
            >
              {currentStep === 'payment' ? 'Confirm Booking' : 'Next'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}