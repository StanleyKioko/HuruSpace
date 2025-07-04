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
import './Guide.css';

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
                <Link to="/" className="nav-logo">Huruspace</Link>
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
            <section className="team-section">
    <div className="container mx-auto px-4">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-grid">
            <div className="team-member">
                <div className="team-image-placeholder">
                    {/* Image placeholder for Mike */}
                </div>
                <h3 className="team-member-name">Mike Muia</h3>
                <p className="team-member-role">Founder</p>
            </div>
            <div className="team-member">
                <div className="team-image-placeholder">
                    {/* Image placeholder for Stanley */}
                </div>
                <h3 className="team-member-name">Stanley Mwange</h3>
                <p className="team-member-role">Co-founder</p>
            </div>
            <div className="team-member">
                <div className="team-image-placeholder">
                    {/* Image placeholder for David */}
                </div>
                <h3 className="team-member-name">David Murage</h3>
                <p className="team-member-role">Co-founder</p>
            </div>
        </div>
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
    const visualFeatures = [
        {
            icon: "🔄",
            title: "360° Virtual Tours",
            description: "Experience immersive walkthroughs of venues before visiting. Explore accessibility features from every angle.",
        },
        {
            icon: "📸",
            title: "Photo Galleries",
            description: "Browse high-quality images showcasing accessibility features, entrances, and facilities at various locations.",
        },
        {
            icon: "🗺️",
            title: "Interactive Maps",
            description: "Navigate through detailed floor plans highlighting accessible routes, amenities, and emergency exits.",
        },
        {
            icon: "📱",
            title: "Mobile Accessibility",
            description: "Access all visual features on any device with our responsive design and mobile-friendly interface.",
        },
        {
            icon: "🎯",
            title: "Detailed Measurements",
            description: "Get precise measurements of doorways, ramps, and spaces to ensure they meet your needs.",
        },
        {
            icon: "🎥",
            title: "Video Walkthroughs",
            description: "Watch guided video tours with detailed explanations of accessibility features.",
        }
    ];

    return (
        <section className="visual-section">
            <div className="visual-container">
                <div className="visual-header">
                    <h1 className="visual-title">Visual Exploration</h1>
                    <p className="visual-description">
                        Experience venues virtually before visiting. Our comprehensive visual tools
                        help you make informed decisions about accessibility.
                    </p>
                </div>

                <div className="visual-grid">
                    {visualFeatures.map((feature, index) => (
                        <div key={index} className="visual-card">
                            <div>
                                <div className="visual-icon">{feature.icon}</div>
                                <h3 className="visual-card-title">{feature.title}</h3>
                                <p className="visual-card-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="visual-demo">
                    <h2 className="visual-card-title">Try Our Virtual Tour Demo</h2>
                    <p className="visual-card-description">
                        Experience our virtual exploration features firsthand with our interactive demo.
                    </p>
                    <a href="#" className="demo-button" tabIndex="0">
                        Launch Demo Tour
                    </a>
                </div>
            </div>
        </section>
    );
}

// Replace the AccessibilityGuide component
function AccessibilityGuide() {
    const guideCategories = [
        {
            icon: "♿",
            title: "Mobility Features",
            items: [
                "Wheelchair ramp specifications",
                "Door width requirements",
                "Elevator access guidelines",
                "Parking space dimensions"
            ]
        },
        {
            icon: "👁️",
            title: "Visual Accessibility",
            items: [
                "Braille signage placement",
                "High-contrast design principles",
                "Tactile pathway guidelines",
                "Audio description standards"
            ]
        },
        {
            icon: "👂",
            title: "Auditory Accessibility",
            items: [
                "Hearing loop installation",
                "Sign language interpretation",
                "Visual alert systems",
                "Acoustic considerations"
            ]
        },
        {
            icon: "🤝",
            title: "Universal Design",
            items: [
                "Inclusive space planning",
                "Multi-sensory experience",
                "Flexible accommodation",
                "Emergency accessibility"
            ]
        }
    ];

    return (
        <section className="guide-section">
            <div className="guide-container">
                <div className="guide-header">
                    <h1 className="guide-title">Accessibility Guide</h1>
                    <p className="guide-description">
                        Comprehensive guidelines and best practices for creating and identifying
                        accessible spaces for everyone.
                    </p>
                </div>

                <div className="guide-content">
                    {guideCategories.map((category, index) => (
                        <div key={index} className="guide-category">
                            <h2 className="category-title">
                                <span className="category-icon">{category.icon}</span>
                                {category.title}
                            </h2>
                            <ul className="guide-list">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="guide-item">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="guide-tip">
                    <h3 className="tip-title">Need More Information?</h3>
                    <p className="tip-description">
                        Access our detailed documentation and resources for comprehensive
                        accessibility guidelines.
                    </p>
                    <a href="#" className="learn-more-button" tabIndex="0">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
// Replace the Benefits component
function Benefits() {
    const benefits = [
        {
            icon: "🤝",
            title: "Community Support",
            desc: "Connect with others and share experiences through our vibrant community of users who understand accessibility needs."
        },
        {
            icon: "✓",
            title: "Verified Reviews",
            desc: "Trust detailed, honest ratings and reviews from users who have first-hand experience with venues."
        },
        {
            icon: "🎯",
            title: "Personalized Results",
            desc: "Find places that perfectly match your specific accessibility requirements and preferences."
        },
        {
            icon: "📱",
            title: "Real-Time Updates",
            desc: "Stay informed with the latest accessibility information and temporary changes at venues."
        },
        {
            icon: "🔍",
            title: "Detailed Information",
            desc: "Access comprehensive details about accessibility features, measurements, and accommodations."
        },
        {
            icon: "💡",
            title: "Smart Recommendations",
            desc: "Receive personalized suggestions based on your preferences and past experiences."
        }
    ];

    const testimonials = [
        {
            text: "Access Voyage has transformed how I explore new places. I can now find accessible venues with confidence!",
            author: "Sarah M., Wheelchair User"
        },
        {
            text: "The detailed accessibility information helps me plan ahead and avoid any surprises.",
            author: "James L., Visual Impairment"
        },
        {
            text: "The community support is amazing. It's great to share experiences with others who understand.",
            author: "Maria R., Parent"
        }
    ];

    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <div className="benefits-header">
                    <h1 className="benefits-title">Why Choose Huruspace?</h1>
                    <p className="benefits-description">
                        Discover how our platform makes finding accessible places easier
                        and more reliable than ever before.
                    </p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="testimonial-section">
                    <h2 className="benefits-title">What Our Users Say</h2>
                    <div className="testimonial-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <p className="testimonial-author">{testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
// Update the GetInvolved component
function GetInvolved() {
    const involvementOptions = [
        {
            icon: "📱",
            title: "Download the App",
            description: "Get started with our free mobile app available on major app stores."
        },
        {
            icon: "⭐",
            title: "Explore & Review",
            description: "Share your experiences and help others find accessible places."
        },
        {
            icon: "👥",
            title: "Join the Community",
            description: "Connect with others and create a more inclusive world together."
        }
    ];

    const helpOptions = [
        {
            icon: "💰",
            title: "Invest",
            description: "Support our mission to make everywhere accessible."
        },
        {
            icon: "🤝",
            title: "Partner",
            description: "Work with us to promote accessibility in your area."
        },
        {
            icon: "📢",
            title: "Share",
            description: "Help spread the word about Access Voyage."
        }
    ];

    return (
        <section className="get-involved-section">
            <div className="get-involved-container">
                <div className="get-involved-header">
                    <h1 className="get-involved-title">Get Involved</h1>
                    <p className="get-involved-subtitle">
                        Join our mission to make the world more accessible for everyone.
                        Here's how you can be part of the change.
                    </p>
                </div>

                <h2 className="get-involved-title">Next Steps</h2>
                <div className="involved-grid">
                    {involvementOptions.map((option, index) => (
                        <div key={index} className="involved-card">
                            <div className="involved-icon">{option.icon}</div>
                            <h3 className="involved-title">{option.title}</h3>
                            <p className="involved-description">{option.description}</p>
                        </div>
                    ))}
                </div>

                <h2 className="get-involved-title">How You Can Help</h2>
                <div className="involved-grid">
                    {helpOptions.map((option, index) => (
                        <div key={index} className="involved-card">
                            <div className="involved-icon">{option.icon}</div>
                            <h3 className="involved-title">{option.title}</h3>
                            <p className="involved-description">{option.description}</p>
                        </div>
                    ))}
                </div>

                <section className="team-section">
    <div className="container mx-auto px-4">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-grid">
            <div className="team-member">
                <div className="team-image-placeholder">
                    {/* Image placeholder for Mike */}
                </div>
                <h3 className="team-member-name">Mike Muia</h3>
                <p className="team-member-role">Founder</p>
            </div>
            <div className="team-member">
                <div className="team-image-placeholder">
                    {/* Image placeholder for Stanley */}
                </div>
                <h3 className="team-member-name">Stanley Mwange</h3>
                <p className="team-member-role">Co-founder</p>
            </div>
            <div className="team-member">
                <div className="team-image-placeholder">
                    {/* Image placeholder for David */}
                </div>
                <h3 className="team-member-name">David Murage</h3>
                <p className="team-member-role">Co-founder</p>
            </div>
        </div>
    </div>
</section>
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
    <div className="footer-content">
        <p>Made with Love By Stanley ❤️ © 2025 Huruspace</p>
        <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                <i className="fab fa-x-twitter"></i>
            </a>
        </div>
    </div>
</footer>
            </BrowserRouter>
        </ErrorBoundary>
    );
}