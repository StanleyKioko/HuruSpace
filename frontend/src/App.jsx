import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Features.css';
import './Search.css';
import './VisualExploration.css';
import './AccessibilityGuide.css';
import './Benefits.css';
import './GetInvolved.css';
import './Navbar.css';
import './Home.css';

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
                <div className="hero-content">
                    <h1 className="hero-title">Discover Accessible Places With Ease</h1>
                    <p className="hero-description">
                        Find inclusive restaurants, parks, hotels, and more with our app designed 
                        for people with disabilities. Join our community and explore the world without barriers.
                    </p>
                    {/*<Link to="/get-involved" className="cta-button" tabIndex="0">*/}

                    {/*</Link>*/}
                </div>
            </section>

            <section className="features-grid">
                <div className="feature-item">
                    <div className="feature-icon">🔍</div>
                    <h3>Find Accessible Venues</h3>
                    <p>Discover places that cater to your specific accessibility needs</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">👥</div>
                    <h3>Community Support</h3>
                    <p>Connect with others and share experiences</p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon">📱</div>
                    <h3>Easy Navigation</h3>
                    <p>User-friendly interface designed for everyone</p>
                </div>
            </section>

            <section className="testimonial-section">
                <div className="hero-content">
                    <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
                    <blockquote className="text-xl italic mb-4">
                        "Access Voyage has transformed how I explore new places. I can now find 
                        accessible venues with confidence!"
                    </blockquote>
                    <p className="font-semibold">- Sarah M., Community Member</p>
                </div>
            </section>

            <section className="stats-section">
                <div className="stat-item">
                    <div className="stat-number">1,000+</div>
                    <p>Accessible Venues</p>
                </div>
                <div className="stat-item">
                    <div className="stat-number">10,000+</div>
                    <p>Community Members</p>
                </div>
                <div className="stat-item">
                    <div className="stat-number">4.8/5</div>
                    <p>User Rating</p>
                </div>
            </section>

            <section className="cta-banner">
                <div className="hero-content">
                    <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
                    <p className="text-xl mb-8">Download the app today and start exploring accessible places</p>
                    <Link to="/get-involved" className="cta-button" tabIndex="0">
                        Get Started
                    </Link>
                </div>
            </section>
        </>
    );
}

// Replace the Features component
function Features() {
    const coreFeatures = [
        {
            icon: "♿",
            title: "Wheelchair Ramps & Elevators",
            desc: "Easy step-free access for all mobility levels, ensuring everyone can move around comfortably and independently."
        },
        {
            icon: "👐",
            title: "Sign Language Friendly Staff",
            desc: "Trained personnel who can communicate effectively with deaf and hard-of-hearing visitors."
        },
        {
            icon: "👥",
            title: "Braille Menus & Signage",
            desc: "Tactile guides and menus for visually impaired visitors, making navigation and ordering easier."
        },
        {
            icon: "🚽",
            title: "Accessible Restrooms",
            desc: "Spacious, well-equipped facilities that meet ADA standards for convenience and comfort."
        },
        {
            icon: "🔊",
            title: "Hearing Loops & Captions",
            desc: "Enhanced audio systems and captioning for better communication and engagement."
        },
        {
            icon: "🅿️",
            title: "Inclusive Parking",
            desc: "Reserved parking spots close to entrances with proper signage and space for mobility equipment."
        }
    ];

    return (
        <section className="features-section">
            <div className="features-container">
                <div className="features-header">
                    <h1 className="features-title">Core Accessibility Features</h1>
                    <p className="features-subtitle">
                        Discover how we make places more accessible for everyone through
                        these essential features and accommodations.
                    </p>
                </div>
                <div className="features-grid">
                    {coreFeatures.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div>
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Replace the Search component
function Search() {
    const popularSearches = [
        "Wheelchair Accessible", "Sign Language", "Braille Available",
        "Audio Description", "Parking", "Restrooms", "Ramps",
        "Guide Dogs Welcome", "Visual Aids"
    ];

    return (
        <section className="search-section">
            <div className="search-container">
                <div className="search-header">
                    <h1 className="search-title">Find Accessible Places</h1>
                    <p className="search-subtitle">
                        Discover venues that cater to your specific accessibility needs
                    </p>
                </div>

                <div className="search-box-container">
                    <input
                        type="text"
                        placeholder="Search for accessible places near you..."
                        className="search-input"
                        aria-label="Search for accessible places"
                    />
                    <div className="filter-section">
                        <button className="filter-button">
                            <span>⭐</span> Filter by Rating
                        </button>
                        <button className="filter-button">
                            <span>📍</span> Filter by Location
                        </button>
                        <button className="filter-button">
                            <span>🔍</span> Filter by Features
                        </button>
                        <button className="filter-button">
                            <span>📝</span> Filter by Reviews
                        </button>
                    </div>
                </div>

                <div className="popular-searches">
                    <h2 className="popular-title">Popular Searches</h2>
                    <div className="tag-cloud">
                        {popularSearches.map((tag, index) => (
                            <button key={index} className="search-tag">
                                {tag}
                            </button>
                        ))}
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