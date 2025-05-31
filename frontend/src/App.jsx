import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Features.css';
import './Search.css';
import './VisualExploration.css';
import './AccessibilityGuide.css';
import './Benefits.css';
import './GetInvolved.css';

class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        console.error('ErrorBoundary caught:', error);
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-red-600">Something went wrong.</h1>
                    <p>{this.state.error?.message || 'Unknown error'}</p>
                    <p>Please check the console for details.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

function NavBar() {
    return (
        <nav className="nav-container" role="navigation" aria-label="Main navigation">
            <div className="nav-content">
                <Link to="/" className="nav-logo">Access Voyage</Link>
                <ul className="nav-links">
                    {[
                        { path: '/', label: 'Home' },
                        { path: '/features', label: 'Features' },
                        { path: '/search', label: 'Search' },
                        { path: '/visual-exploration', label: 'Visual Exploration' },
                        { path: '/accessibility-guide', label: 'Guide' },
                        { path: '/benefits', label: 'Benefits' },
                        { path: '/get-involved', label: 'Get Involved' }
                    ].map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className="nav-link"
                                tabIndex="0"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

function Home() {
    return (
        <>
            <section className="hero-section">
                <div className="section-container">
                    <h2 className="text-4xl font-bold mb-4">Discover Accessible Places With Ease</h2>
                    <p className="text-lg mb-6">Find inclusive restaurants, parks, hotels, and more with our app designed for people with disabilities.</p>
                    <Link
                        to="/get-involved"
                        className="button-primary"
                        tabIndex="0"
                    >
                        Download the App
                    </Link>
                </div>
            </section>
        </>
    );
}

// Replace the Features component
function Features() {
    const coreFeatures = [
        { title: "Wheelchair Ramps & Elevators", desc: "Easy step-free access for all mobility levels." },
        { title: "Sign Language Friendly Staff", desc: "Support for communication with trained personnel." },
        { title: "Braille Menus & Signage", desc: "Tactile guides for visually impaired visitors." },
        { title: "Accessible Restrooms", desc: "Convenient, spacious, and compliant facilities." },
        { title: "Hearing Loops & Captioned Services", desc: "Enhances sound clarity for hearing aid users with captions on videos and live events." },
        { title: "Step-Free Entrances & Inclusive Parking", desc: "Smooth building access with reserved parking spots close to entrances." },
    ];

    return (
        <section className="page-section bg-[var(--background-light)]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Core Accessibility Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreFeatures.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <h3 className="text-xl font-semibold mb-3 text-[var(--primary-blue)]">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Replace the Search component
function Search() {
    return (
        <section className="page-section bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Find Accessible Places</h2>
                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Search for accessible places..."
                        className="search-input"
                        aria-label="Search for accessible places"
                    />
                    <div className="button-group">
                        <button className="action-button">Filter by Rating</button>
                        <button className="action-button">Filter by Location</button>
                        <button className="action-button">Filter by Features</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Replace the VisualExploration component
function VisualExploration() {
    return (
        <section className="page-section bg-[var(--background-light)]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Visual Exploration</h2>
                <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
                    Explore venues through our comprehensive visual guides and virtual tours.
                </p>
                <div className="image-grid">
                    <div className="feature-card">
                        <h3 className="text-xl font-semibold mb-3">360° Virtual Tours</h3>
                        <p className="text-gray-600">Immersive walkthroughs of venues</p>
                    </div>
                    <div className="feature-card">
                        <h3 className="text-xl font-semibold mb-3">Photo Galleries</h3>
                        <p className="text-gray-600">High-quality images of accessibility features</p>
                    </div>
                    <div className="feature-card">
                        <h3 className="text-xl font-semibold mb-3">Interactive Maps</h3>
                        <p className="text-gray-600">Navigate through floor plans</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Replace the AccessibilityGuide component
function AccessibilityGuide() {
    const guideFeatures = [
        "High contrast and adjustable text size",
        "Alt text for images",
        "Keyboard navigation support",
        "Color contrast for better readability",
        "Clear spacing for easy navigation",
    ];

    return (
        <section className="page-section bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Accessibility Guide</h2>
                <div className="guide-list">
                    {guideFeatures.map((feature, index) => (
                        <div key={index} className="guide-item">
                            <h3 className="text-lg font-semibold mb-2">✓ {feature}</h3>
                            <p className="text-gray-600">Learn how to make the most of this feature</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Replace the Benefits component
function Benefits() {
    const benefits = [
        { title: "Community Support", desc: "Connect with others and share experiences" },
        { title: "Verified Reviews", desc: "Trust ratings from users like you" },
        { title: "Personalized Results", desc: "Find places that meet your specific needs" }
    ];

    return (
        <section className="page-section bg-[var(--background-light)]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">User Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
// Update the GetInvolved component
function GetInvolved() {
    return (
        <section className="get-involved-section">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Next Steps & Get Involved</h2>
                <div className="involved-grid">
                    <div className="involved-card">
                        <h3 className="text-xl font-semibold mb-2">Download the App</h3>
                        <p>Available on major app stores for free.</p>
                    </div>
                    <div className="involved-card">
                        <h3 className="text-xl font-semibold mb-2">Explore & Review</h3>
                        <p>Find accessible spots and share your feedback.</p>
                    </div>
                    <div className="involved-card">
                        <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
                        <p>Connect with others to create a more inclusive world.</p>
                    </div>
                </div>
                <h2 className="text-3xl font-bold mt-12 mb-8 text-center">How You Can Help</h2>
                <div className="involved-grid">
                    <div className="involved-card">
                        <h3 className="text-xl font-semibold mb-2">Invest</h3>
                        <p>Help us grow and reach more people.</p>
                    </div>
                    <div className="involved-card">
                        <h3 className="text-xl font-semibold mb-2">Partner</h3>
                        <p>Collaborate with us to promote accessibility.</p>
                    </div>
                    <div className="involved-card">
                        <h3 className="text-xl font-semibold mb-2">Share</h3>
                        <p>Spread the word about Access Voyage.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function App() {
    console.log('Rendering App component...');
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/visual-exploration" element={<VisualExploration />} />
                    <Route path="/accessibility-guide" element={<AccessibilityGuide />} />
                    <Route path="/benefits" element={<Benefits />} />
                    <Route path="/get-involved" element={<GetInvolved />} />
                </Routes>
                <footer className="nav-container">
    <div className="section-container text-center text-white">
        <p>Made with Love By Stanley ❤️ © 2025 Access Voyage</p>
    </div>
</footer>
            </BrowserRouter>
        </ErrorBoundary>
    );
}