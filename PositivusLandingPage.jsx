import { useState } from "react";

// ─── Asset URLs from Figma ────────────────────────────────────────────────────
const assets = {
  logoIcon: "https://www.figma.com/api/mcp/asset/a17a0e12-6e21-4133-a587-9db95fa30733",
  logoText: "https://www.figma.com/api/mcp/asset/0c409ed3-0050-4754-bc4f-243ae99fc47a",
  logoIconDark: "https://www.figma.com/api/mcp/asset/03cedd4f-b1fa-4b42-952f-cb2bebf71888",
  logoTextDark: "https://www.figma.com/api/mcp/asset/839d248b-684e-4b25-94db-14f87b634705",
  heroIllustration: "https://www.figma.com/api/mcp/asset/255222b7-d127-4e82-bcc3-db84baf4aee5",
  seoIllustration: "https://www.figma.com/api/mcp/asset/f247c14e-ecf1-4e44-ad8d-b168973fec9e",
  ppcIllustration: "https://www.figma.com/api/mcp/asset/e079a1fd-914d-4f4a-ad38-55530b69d7ca",
  socialIllustration: "https://www.figma.com/api/mcp/asset/53299c9d-74e2-4021-a7b1-01be9eda8180",
  emailIllustration: "https://www.figma.com/api/mcp/asset/6350a61a-0f4b-4d45-a50d-0d857557d3f2",
  contentIllustration: "https://www.figma.com/api/mcp/asset/ab026aff-33bd-4da9-8400-fcd0e38a506c",
  analyticsIllustration: "https://www.figma.com/api/mcp/asset/b59f4642-b180-472d-88b3-9475d8f25e8b",
  ctaIllustration: "https://www.figma.com/api/mcp/asset/401871bd-271f-463d-8699-eaa3c7fe1596",
  contactIllustration: "https://www.figma.com/api/mcp/asset/318b249c-1787-40b7-930f-88012917fbbf",
  linkIconDark: "https://www.figma.com/api/mcp/asset/58dca512-2c12-4716-9113-0d83aa8888fe",
  linkIconLight: "https://www.figma.com/api/mcp/asset/e3afe51a-8a82-484e-bc55-36fd7687bd6c",
  arrowGreen: "https://www.figma.com/api/mcp/asset/482931f4-668b-47ae-9ab5-30ec3033948c",
  socialIcon: "https://www.figma.com/api/mcp/asset/7f034d05-b00b-4b2d-aa3a-fbb4fb670e54",
  socialIconsFooter: "https://www.figma.com/api/mcp/asset/4a76bb95-9d3a-4ef4-bcfd-889891989240",
  testimonialBubble: "https://www.figma.com/api/mcp/asset/1d6879da-6cfe-4dab-a5b8-ca2d1cbeaa38",
  testimonialArrowLeft: "https://www.figma.com/api/mcp/asset/9ac0b5e8-c404-4dd7-aa65-ba9322521cfd",
  testimonialArrowRight: "https://www.figma.com/api/mcp/asset/d84d97a4-427c-426d-b989-692a0ad421c0",
  testimonialStars: "https://www.figma.com/api/mcp/asset/d99c908f-7231-4d54-b7a3-d9e00c3744e1",
  radiobutton: "https://www.figma.com/api/mcp/asset/1bf9b23e-50ce-4ccb-8939-0eb9a761435f",
  teamJohnSmith: "https://www.figma.com/api/mcp/asset/dbef866c-d246-435c-919e-16b1b1e8edc1",
  teamJaneDoe: "https://www.figma.com/api/mcp/asset/396a3daf-bbf0-4094-8f1d-b304409b3e7c",
  teamMichaelBrown: "https://www.figma.com/api/mcp/asset/5315827a-ecaf-4a9c-9543-dc387f738b03",
  teamEmilyJohnson: "https://www.figma.com/api/mcp/asset/66c21a4c-319a-4d51-8eac-550faa7dc743",
  teamBrianWilliams: "https://www.figma.com/api/mcp/asset/e20c2809-b83e-4259-a215-519acb12df7d",
  teamSarahKim: "https://www.figma.com/api/mcp/asset/06e6c7d1-5a6f-4722-9e9e-c72694ba04d1",
  companyLogo1: "https://www.figma.com/api/mcp/asset/b193d0dd-9959-4e2d-ad94-5886bac62f6a",
  companyLogo2: "https://www.figma.com/api/mcp/asset/8395989a-6182-4017-a336-827603596ed3",
  companyLogo3: "https://www.figma.com/api/mcp/asset/9c8eb189-becc-4bb9-a850-740a09de1c3d",
  companyLogo4: "https://www.figma.com/api/mcp/asset/f35f0705-d605-405c-b615-c6c8acd56a89",
  companyLogo5: "https://www.figma.com/api/mcp/asset/fd78e828-e3ee-4f39-85d7-3b4a21aba09d",
  companyLogo6: "https://www.figma.com/api/mcp/asset/8fe51b16-ebfd-440f-88ff-468513419088",
};

// ─── Design Tokens ────────────────────────────────────────────────────────────
const colors = {
  green: "#B9FF66",
  dark: "#191A23",
  grey: "#F3F3F3",
  black: "#000000",
  white: "#FFFFFF",
};

// ─── Reusable Components ──────────────────────────────────────────────────────
function SectionHeading({ label, description }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 40, marginBottom: 80 }}>
      <span
        style={{
          background: colors.green,
          borderRadius: 7,
          padding: "0 7px",
          fontSize: 40,
          fontWeight: 500,
          fontFamily: "'Space Grotesk', sans-serif",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      {description && (
        <p
          style={{
            fontSize: 18,
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
            color: colors.dark,
            maxWidth: 580,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Button({ label, variant = "dark", style: extraStyle = {}, onClick }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 35px",
    borderRadius: 14,
    fontSize: 20,
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 400,
    cursor: "pointer",
    border: variant === "outline" ? `1px solid ${colors.dark}` : "none",
    transition: "opacity 0.2s",
  };
  const variants = {
    dark: { background: colors.dark, color: colors.white },
    green: { background: colors.green, color: colors.dark },
    outline: { background: "transparent", color: colors.dark },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...extraStyle }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {label}
    </button>
  );
}

function ServiceCard({ bg, headingBg, title, lines, illustration, illustrationStyle = {} }) {
  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${colors.dark}`,
        borderRadius: 45,
        boxShadow: `0 5px 0 ${colors.dark}`,
        padding: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: 210 }}>
        <div>
          {lines.map((line, i) => (
            <div
              key={i}
              style={{
                background: headingBg,
                borderRadius: 7,
                padding: "0 7px",
                display: "inline-block",
                marginBottom: 2,
              }}
            >
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 500,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: colors.dark,
                  lineHeight: 1.2,
                  display: "block",
                }}
              >
                {line}
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 15, cursor: "pointer" }}>
          <img src={bg === colors.dark ? assets.linkIconLight : assets.linkIconDark} alt="" style={{ width: 41, height: 41 }} />
          <span
            style={{
              fontSize: 20,
              fontFamily: "'Space Grotesk', sans-serif",
              color: bg === colors.dark ? colors.white : colors.dark,
            }}
          >
            Learn more
          </span>
        </div>
      </div>
      <img src={illustration} alt={title} style={{ width: 210, height: "auto", maxHeight: 210, objectFit: "contain", ...illustrationStyle }} />
    </div>
  );
}

function TeamCard({ name, role, bio, photo }) {
  return (
    <div
      style={{
        background: colors.white,
        border: `1px solid ${colors.dark}`,
        borderRadius: 45,
        boxShadow: `0 5px 0 ${colors.dark}`,
        padding: "40px 35px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: 20, alignItems: "flex-end", marginBottom: 20 }}>
        <img
          src={photo}
          alt={name}
          style={{ width: 98, height: 98, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: `5px solid ${colors.green}` }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif" }}>{name}</p>
          <p style={{ margin: 0, fontSize: 16, fontFamily: "'Space Grotesk', sans-serif", color: "#666" }}>{role}</p>
        </div>
        <img src={assets.socialIcon} alt="LinkedIn" style={{ width: 34, height: 34, flexShrink: 0 }} />
      </div>
      <div style={{ height: 1, background: colors.dark, marginBottom: 20 }} />
      <p style={{ fontSize: 16, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.5, color: colors.dark, margin: 0 }}>{bio}</p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PositivusLandingPage() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [contactType, setContactType] = useState("sayhi");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const processSteps = [
    {
      num: "01",
      title: "Consultation",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    { num: "02", title: "Research and Strategy Development", desc: "We conduct thorough market research to develop a customized strategy aligned with your goals, competitive landscape, and target audience." },
    { num: "03", title: "Implementation", desc: "Our team executes the strategy with precision across all agreed-upon channels, ensuring timely delivery and quality standards." },
    { num: "04", title: "Monitoring and Optimization", desc: "We continuously track performance metrics and make data-driven adjustments to optimize results and improve ROI." },
    { num: "05", title: "Reporting and Communication", desc: "Regular reports keep you informed about progress, key metrics, and insights through clear, transparent communication." },
    { num: "06", title: "Continual Improvement", desc: "We leverage insights and industry trends to refine our approach, ensuring long-term growth and sustained success." },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
      text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
      name: "Sarah Lee",
      role: "CEO at Brightline Co",
      text: '"Positivus transformed our online presence completely. Their SEO work pushed us to the first page of Google within 3 months, and their PPC campaigns deliver consistent ROI. A fantastic team to work with!"',
    },
    {
      name: "Marcus Wong",
      role: "Head of Growth at LaunchPad",
      text: '"The Positivus team brings a level of expertise and dedication that is hard to find. They treat your business as their own and the results speak for themselves — 40% growth in qualified leads in 6 months."',
    },
  ];

  const teamMembers = [
    { name: "John Smith", role: "CEO and Founder", bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy", photo: assets.teamJohnSmith },
    { name: "Jane Doe", role: "Director of Operations", bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills", photo: assets.teamJaneDoe },
    { name: "Michael Brown", role: "Senior SEO Specialist", bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization", photo: assets.teamMichaelBrown },
    { name: "Emily Johnson", role: "PPC Manager", bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis", photo: assets.teamEmilyJohnson },
    { name: "Brian Williams", role: "Social Media Specialist", bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement", photo: assets.teamBrianWilliams },
    { name: "Sarah Kim", role: "Content Creator", bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries", photo: assets.teamSarahKim },
  ];

  const companyLogos = [
    assets.companyLogo1, assets.companyLogo2, assets.companyLogo3,
    assets.companyLogo4, assets.companyLogo5, assets.companyLogo6,
  ];

  const visibleTestimonials = [
    testimonials[testimonialIdx % testimonials.length],
    testimonials[(testimonialIdx + 1) % testimonials.length],
  ];

  const containerStyle = {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 100px",
    boxSizing: "border-box",
  };

  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", background: colors.white, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        button { border: none; cursor: pointer; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav style={{ ...containerStyle, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 100px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src={assets.logoIcon} alt="" style={{ height: 36, width: "auto" }} />
          <img src={assets.logoText} alt="Positivus" style={{ height: 29, width: "auto" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {["About us", "Services", "Use Cases", "Pricing", "Blog"].map((item) => (
            <a key={item} href="#" style={{ fontSize: 20, color: colors.dark, fontFamily: "'Space Grotesk', sans-serif" }}>
              {item}
            </a>
          ))}
          <Button label="Request a quote" variant="outline" />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ ...containerStyle, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "60px 100px 80px", gap: 40 }}>
        <div style={{ maxWidth: 531 }}>
          <h1 style={{ fontSize: 60, fontWeight: 500, lineHeight: 1.1, color: colors.dark, margin: "0 0 35px", fontFamily: "'Space Grotesk', sans-serif" }}>
            Navigating the digital landscape for success
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.5, color: colors.dark, margin: "0 0 40px", maxWidth: 498, fontFamily: "'Space Grotesk', sans-serif" }}>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <Button label="Book a consultation" variant="dark" />
        </div>
        <div style={{ flexShrink: 0, width: 600, display: "flex", justifyContent: "center" }}>
          <img src={assets.heroIllustration} alt="Hero illustration" style={{ width: "100%", height: "auto" }} />
        </div>
      </section>

      {/* ── COMPANY LOGOS ── */}
      <section style={{ ...containerStyle, paddingTop: 0, paddingBottom: 70, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        {companyLogos.map((logo, i) => (
          <img key={i} src={logo} alt="Partner logo" style={{ height: 48, width: "auto", objectFit: "contain", filter: "grayscale(0.2)", opacity: 0.8 }} />
        ))}
      </section>

      {/* ── SERVICES ── */}
      <section style={{ ...containerStyle, paddingTop: 0, paddingBottom: 140 }}>
        <SectionHeading label="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <ServiceCard bg={colors.grey} headingBg={colors.green} title="SEO" lines={["Search engine", "optimization"]} illustration={assets.seoIllustration} />
          <ServiceCard bg={colors.green} headingBg={colors.white} title="PPC" lines={["Pay-per-click", "advertising"]} illustration={assets.ppcIllustration} />
          <ServiceCard bg={colors.dark} headingBg={colors.white} title="Social" lines={["Social Media", "Marketing"]} illustration={assets.socialIllustration} />
          <ServiceCard bg={colors.grey} headingBg={colors.green} title="Email" lines={["Email", "Marketing"]} illustration={assets.emailIllustration} />
          <ServiceCard bg={colors.green} headingBg={colors.white} title="Content" lines={["Content", "Creation"]} illustration={assets.contentIllustration} />
          <ServiceCard bg={colors.dark} headingBg={colors.green} title="Analytics" lines={["Analytics and", "Tracking"]} illustration={assets.analyticsIllustration} />
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ ...containerStyle, paddingTop: 0, paddingBottom: 140 }}>
        <div
          style={{
            background: colors.grey,
            borderRadius: 45,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "60px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ maxWidth: 500 }}>
            <h3 style={{ fontSize: 30, fontWeight: 500, color: colors.dark, margin: "0 0 26px", fontFamily: "'Space Grotesk', sans-serif" }}>
              Let's make things happen
            </h3>
            <p style={{ fontSize: 18, color: colors.dark, margin: "0 0 40px", lineHeight: 1.5, fontFamily: "'Space Grotesk', sans-serif" }}>
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <Button label="Get your free proposal" variant="dark" />
          </div>
          <img src={assets.ctaIllustration} alt="" style={{ height: 394, width: "auto", flexShrink: 0 }} />
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section style={{ ...containerStyle, paddingTop: 0, paddingBottom: 140 }}>
        <SectionHeading label="Case Studies" description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
        <div
          style={{
            background: colors.dark,
            borderRadius: 45,
            padding: "70px 60px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr",
            gap: 0,
            alignItems: "start",
          }}
        >
          {[
            "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
            "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
            "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
          ].map((text, i) => (
            <>
              <div key={`case-${i}`} style={{ padding: "0 30px" }}>
                <p style={{ fontSize: 18, color: colors.white, lineHeight: 1.5, margin: "0 0 20px", fontFamily: "'Space Grotesk', sans-serif" }}>{text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <span style={{ fontSize: 20, color: colors.green, fontFamily: "'Space Grotesk', sans-serif" }}>Learn more</span>
                  <img src={assets.arrowGreen} alt="→" style={{ width: 17, height: 10 }} />
                </div>
              </div>
              {i < 2 && (
                <div key={`div-${i}`} style={{ width: 1, background: "rgba(255,255,255,0.3)", alignSelf: "stretch", margin: "0 10px" }} />
              )}
            </>
          ))}
        </div>
      </section>

      {/* ── WORKING PROCESS ── */}
      <section style={{ ...containerStyle, paddingTop: 0, paddingBottom: 140 }}>
        <SectionHeading label="Our Working Process" description="Step-by-Step Guide to Achieving Your Business Goals" />
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {processSteps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveProcess(activeProcess === i ? -1 : i)}
              style={{
                background: activeProcess === i ? colors.green : colors.grey,
                border: `1px solid ${colors.dark}`,
                borderRadius: 45,
                boxShadow: `0 5px 0 ${colors.dark}`,
                padding: "41px 60px",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
                  <span style={{ fontSize: 60, fontWeight: 500, color: colors.dark, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>{step.num}</span>
                  <span style={{ fontSize: 30, fontWeight: 500, color: colors.dark, fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</span>
                </div>
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    border: `2px solid ${colors.dark}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    fontWeight: 300,
                    color: colors.dark,
                    background: activeProcess === i ? colors.dark : colors.white,
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: activeProcess === i ? colors.green : colors.dark }}>{activeProcess === i ? "−" : "+"}</span>
                </div>
              </div>
              {activeProcess === i && (
                <>
                  <div style={{ height: 1, background: colors.dark, margin: "30px 0" }} />
                  <p style={{ fontSize: 18, color: colors.dark, lineHeight: 1.6, margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>{step.desc}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ ...containerStyle, paddingTop: 0, paddingBottom: 140 }}>
        <SectionHeading label="Team" description="Meet the skilled and experienced team behind our successful digital marketing strategies" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
          {teamMembers.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 40 }}>
          <Button label="See all team" variant="outline" />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ paddingTop: 0, paddingBottom: 140 }}>
        <div style={{ ...containerStyle }}>
          <SectionHeading label="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
        </div>
        <div style={{ background: colors.dark, padding: "84px 100px 60px", position: "relative", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 50, marginBottom: 50 }}>
            {visibleTestimonials.map((t, i) => (
              <div key={i} style={{ flex: 1, position: "relative" }}>
                <div
                  style={{
                    border: `1px solid ${colors.green}`,
                    borderRadius: 45,
                    padding: "48px 52px 52px",
                    marginBottom: 20,
                    position: "relative",
                  }}
                >
                  <p style={{ fontSize: 18, color: colors.white, lineHeight: 1.6, margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>{t.text}</p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: -20,
                      left: 60,
                      width: 40,
                      height: 20,
                      background: colors.dark,
                      borderLeft: `1px solid ${colors.green}`,
                      borderRight: `1px solid ${colors.green}`,
                      clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: 80 }}>
                  <p style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 500, color: colors.green, fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</p>
                  <p style={{ margin: 0, fontSize: 18, color: colors.white, fontFamily: "'Space Grotesk', sans-serif" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
            <button
              onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <img src={assets.testimonialArrowLeft} alt="Previous" style={{ width: 20, height: "auto" }} />
            </button>
            <img src={assets.testimonialStars} alt="navigation dots" style={{ height: 14, width: "auto" }} />
            <button
              onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <img src={assets.testimonialArrowRight} alt="Next" style={{ width: 20, height: "auto" }} />
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ ...containerStyle, paddingTop: 0, paddingBottom: 140 }}>
        <SectionHeading label="Contact Us" description="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
        <div
          style={{
            background: colors.grey,
            borderRadius: 45,
            padding: "60px 100px 80px",
            display: "flex",
            gap: 60,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "0 0 556px" }}>
            <div style={{ display: "flex", gap: 35, marginBottom: 40 }}>
              {[
                { value: "sayhi", label: "Say Hi" },
                { value: "quote", label: "Get a Quote" },
              ].map((opt) => (
                <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", fontSize: 18, fontFamily: "'Space Grotesk', sans-serif" }}>
                  <div
                    onClick={() => setContactType(opt.value)}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border: `1px solid ${colors.dark}`,
                      background: contactType === opt.value ? colors.dark : colors.white,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  >
                    {contactType === opt.value && (
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: colors.green }} />
                    )}
                  </div>
                  {opt.label}
                </label>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
              {[
                { label: "Name", key: "name", placeholder: "Enter your name", type: "text" },
                { label: "Email*", key: "email", placeholder: "Enter your email", type: "email" },
              ].map((field) => (
                <div key={field.key}>
                  <p style={{ margin: "0 0 5px", fontSize: 16, fontFamily: "'Space Grotesk', sans-serif", color: colors.dark }}>{field.label}</p>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "18px 30px",
                      border: `1px solid ${colors.dark}`,
                      borderRadius: 14,
                      fontSize: 18,
                      fontFamily: "'Space Grotesk', sans-serif",
                      outline: "none",
                      background: colors.white,
                    }}
                  />
                </div>
              ))}
              <div>
                <p style={{ margin: "0 0 5px", fontSize: 16, fontFamily: "'Space Grotesk', sans-serif", color: colors.dark }}>Message*</p>
                <textarea
                  placeholder="Your message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%",
                    height: 190,
                    padding: "18px 30px",
                    border: `1px solid ${colors.dark}`,
                    borderRadius: 14,
                    fontSize: 18,
                    fontFamily: "'Space Grotesk', sans-serif",
                    resize: "none",
                    outline: "none",
                    background: colors.white,
                  }}
                />
              </div>
            </div>
            <div style={{ marginTop: 30 }}>
              <Button label="Send Message" variant="dark" style={{ width: "100%", justifyContent: "center" }} />
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={assets.contactIllustration} alt="Contact illustration" style={{ width: "100%", maxWidth: 450, height: "auto" }} />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ ...containerStyle, paddingTop: 0, paddingBottom: 0 }}>
        <div
          style={{
            background: colors.dark,
            borderRadius: "45px 45px 0 0",
            padding: "55px 60px 50px",
          }}
        >
          {/* Top row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 66 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src={assets.logoIconDark} alt="" style={{ height: 29 }} />
              <img src={assets.logoTextDark} alt="Positivus" style={{ height: 23 }} />
            </div>
            <div style={{ display: "flex", gap: 40 }}>
              {["About us", "Services", "Use Cases", "Pricing", "Blog"].map((item) => (
                <a key={item} href="#" style={{ fontSize: 18, color: colors.white, fontFamily: "'Space Grotesk', sans-serif", textDecoration: "underline" }}>
                  {item}
                </a>
              ))}
            </div>
            <img src={assets.socialIconsFooter} alt="Social icons" style={{ height: 30 }} />
          </div>

          {/* Contact + subscription */}
          <div style={{ display: "flex", gap: 154, marginBottom: 50 }}>
            <div>
              <span style={{ background: colors.green, borderRadius: 7, padding: "2px 7px", fontSize: 20, fontWeight: 500, fontFamily: "'Space Grotesk', sans-serif", color: colors.dark }}>
                Contact us
              </span>
              <div style={{ marginTop: 27, display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  "Email: info@positivus.com",
                  "Phone: 555-567-8901",
                  "Address: 1234 Main St\nMoonstone City, Stardust State 12345",
                ].map((item, i) => (
                  <p key={i} style={{ margin: 0, fontSize: 18, color: colors.white, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.5, whiteSpace: "pre-line" }}>{item}</p>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "#292a32",
                borderRadius: 14,
                padding: "58px 40px",
                display: "flex",
                gap: 20,
                alignItems: "center",
              }}
            >
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: 285,
                  padding: "22px 35px",
                  border: `1px solid ${colors.white}`,
                  borderRadius: 14,
                  background: "transparent",
                  fontSize: 18,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: colors.white,
                  outline: "none",
                }}
              />
              <Button label="Subscribe to news" variant="green" />
            </div>
          </div>

          <div style={{ height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 50 }} />
          <div style={{ display: "flex", gap: 40 }}>
            <p style={{ margin: 0, fontSize: 18, color: colors.white, fontFamily: "'Space Grotesk', sans-serif" }}>© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" style={{ fontSize: 18, color: colors.white, fontFamily: "'Space Grotesk', sans-serif", textDecoration: "underline" }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
