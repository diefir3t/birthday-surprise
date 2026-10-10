
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0">
    <meta
        name="theme-color"
        content="#060915">
    <meta
        name="description"
        content="A beautiful interactive birthday surprise.">
    <title>Happy Birthday, My Love ✨</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,wght@0,500;0,600;1,500;1,600&display=swap"
        rel="stylesheet">
    <!-- Birthday CSS -->
    <link
        rel="stylesheet"
        href="css/style.css">
</head>

<body>
    <!-- ==================================================
         Background Music
         ================================================== -->
    <audio
        id="bgMusic"
        preload="metadata"
        loop>
        <source
            src="music/golden-hour.mp3"
            type="audio/mpeg">
    </audio>
    <!-- ==================================================
         Music Control
         ================================================== -->
    <button
        id="floatingMusicControl"
        class="floating-music-control"
        type="button"
        aria-label="Play birthday music">
        <span class="music-icon">♫</span>
        <span class="music-text">
            Play music
        </span>
    </button>
    <!-- ==================================================
         COUNTDOWN GATE
         ================================================== -->
    <section
        id="countdownGate"
        aria-live="polite">
        <div class="countdown-content">
            <div class="countdown-kicker">
                A Little Surprise, Just For You❤️
            </div>
            <h1 class="countdown-title">
                I’ve been waiting for
                <em>this moment...</em>
            </h1>
            <p class="countdown-sub">
                Almost there...
            </p>
            <div class="countdown-grid">
                <div class="count-unit">
                    <div
                        class="count-number"
                        id="days">
                        00
                    </div>
                    <span class="count-label">
                        Days
                    </span>
                </div>
                <div class="count-unit">
                    <div
                        class="count-number"
                        id="hours">
                        00
                    </div>
                    <span class="count-label">
                        Hours
                    </span>
                </div>
                <div class="count-unit">
                    <div
                        class="count-number"
                        id="minutes">
                        00
                    </div>
                    <span class="count-label">
                        Minutes
                    </span>
                </div>
                <div class="count-unit">
                    <div
                        class="count-number"
                        id="seconds">
                        00
                    </div>
                    <span class="count-label">
                        Seconds
                    </span>
                </div>
            </div>
            <div class="iran-clock">
                Iran time:
                <strong id="iranClock">
                    --:--:--
                </strong>
            </div>
            <button
                id="openBirthdayBtn"
                class="countdown-open-btn"
                type="button"
                hidden>
                Open your surprise
                <span>♥</span>
            </button>
            <div
                id="readyHint"
                class="ready-hint"
                hidden>
                Your surprise is ready.
                Tap the button when you are ready. ✦
            </div>
        </div>
    </section>
    <!-- ==================================================
         MAIN SITE
         ================================================== -->
    <div
        class="site-shell"
        id="siteShell">
        <!-- ==================================================
             Intro
             ================================================== -->
        <div
            id="intro"
            aria-hidden="true">
            <div class="intro-wrap">
                <div class="intro-kicker">
                    A little surprise is waiting
                </div>
                <div class="intro-title">
                    Made with
                    <span>love</span>.
                </div>
                <div class="intro-line"></div>
                <div class="intro-note">
                    Preparing something special...
                </div>
            </div>
        </div>
        <!-- ==================================================
             Ambient Background
             ================================================== -->
        <div class="ambient">
            <div class="orb orb-one"></div>
            <div class="orb orb-two"></div>
            <div class="orb orb-three"></div>
            <div
                class="stars"
                id="stars"></div>
        </div>
        <!-- Pixel rain (light canvas) -->
        <canvas
            id="pixelRain"
            aria-hidden="true"></canvas>
        <!-- ==================================================
             Floating Hearts
             ================================================== -->
        <div
            id="floatingHearts"
            class="floating-hearts"></div>
        <!-- ==================================================
             Navigation
             ================================================== -->
        <nav class="nav">
            <a
                class="brand"
                href="#home">
                <span class="brand-dot"></span>
                for you
            </a>
            <div class="nav-links">
                <a href="#letter">
                    A note
                </a>
                <a href="#reasons">
                    Reasons
                </a>
                <a href="#story">
                    Our story
                </a>
                <a href="#gallery">
                    Gallery
                </a>
                <a href="#surprise">
                    Surprise
                </a>
            </div>
            <button
                class="music-btn"
                id="soundToggle"
                type="button"
                aria-label="Toggle ambient sound">
                <span>♫</span>
            </button>
        </nav>
        <!-- ==================================================
             Main Content
             ================================================== -->
        <main>
            <!-- ==================================================
                 HERO
                 ================================================== -->
            <section
                class="hero"
                id="home">
                <div class="hero-inner container">
                    <div class="hero-tag">
                        <span class="heart">
                            ♥
                        </span>
                        today is your day
                    </div>
                    <h1>
                        Happy Birthday,
                        <br>
                        <span class="accent">
                            My Love.
                        </span>
                    </h1>
                    <p class="hero-sub">
                        Today the world gets to celebrate
                        the person who makes my little world
                        feel brighter, softer, and infinitely
                        more beautiful.
                    </p>
                    <div class="hero-actions">
                        <a
                            class="btn btn-primary"
                            href="#letter">
                            Open your letter ✦
                        </a>
                        <a
                            class="btn btn-ghost"
                            href="#surprise">
                            There is a surprise →
                        </a>
                    </div>
                </div>
                <div class="scroll-cue">
                    <div class="mouse"></div>
                    scroll slowly
                </div>
            </section>
            <!-- ==================================================
                 LETTER
                 ================================================== -->
            <section
                class="section"
                id="letter">
                <div class="container note-wrap">
                    <div class="reveal">
                        <div class="eyebrow">
                            A little letter
                        </div>
                        <h2 class="section-title">
                            For the person who makes
                            <em>
                                ordinary days
                            </em>
                            feel special.
                        </h2>
                        <p class="section-copy">
                            No complicated words.
                            No perfect sentences.
                            Just a small corner of the internet
                            made for one very important person.
                        </p>
                    </div>
                    <article
                        class="note-card reveal tilt">
                        <div class="paper-mark">
                            ✉
                        </div>
                        <div class="note-text">
                            I hope this new chapter brings you
                            <em>
                                more laughter, more peace,
                            </em>
                            and every beautiful thing you
                            quietly deserve.
                        </div>
                        <div class="signature">
                            — with all my love, always.
                        </div>
                    </article>
                </div>
                <div class="container stats">
                    <div class="mini-card reveal">
                        <div class="num">
                            01
                        </div>
                        <h3>
                            Your smile
                        </h3>
                        <p>
                            Somehow, it can change the
                            entire mood of a day.
                        </p>
                    </div>
                    <div class="mini-card reveal">
                        <div class="num">
                            02
                        </div>
                        <h3>
                            Your energy
                        </h3>
                        <p>
                            Warm, unforgettable,
                            and impossible not to notice.
                        </p>
                    </div>
                    <div class="mini-card reveal">
                        <div class="num">
                            03
                        </div>
                        <h3>
                            Your heart
                        </h3>
                        <p>
                            The part of you I could never
                            describe in just one page.
                        </p>
                    </div>
                    <div class="mini-card reveal">
                        <div class="num">
                            ∞
                        </div>
                        <h3>
                            My favorite thing
                        </h3>
                        <p>
                            Getting to make memories with you,
                            one day at a time.
                        </p>
                    </div>
                </div>
            </section>
            <!-- ==================================================
                 REASONS
                 ================================================== -->
            <section
                class="section"
                id="reasons">
                <div class="container">
                    <div class="reveal">
                        <div class="eyebrow">
                            A few reasons
                        </div>
                        <h2 class="section-title">
                            Why you are
                            <em>
                                so easy to love.
                            </em>
                        </h2>
                        <p class="section-copy">
                            A tiny list, because the real one
                            would probably need an entire website.
                        </p>
                    </div>
                    <div class="reason-grid">
                        <article class="reason reveal tilt">
                            <div class="icon">
                                ✦
                            </div>
                            <h3>
                                You make things lighter.
                            </h3>
                            <p>
                                Even normal moments somehow feel
                                better when you are part of them.
                            </p>
                        </article>
                        <article class="reason reveal tilt">
                            <div class="icon">
                                ♡
                            </div>
                            <h3>
                                You feel like home.
                            </h3>
                            <p>
                                There is a kind of comfort in you
                                that words never quite manage to explain.
                            </p>
                        </article>
                        <article class="reason reveal tilt">
                            <div class="icon">
                                ☼
                            </div>
                            <h3>
                                You glow differently.
                            </h3>
                            <p>
                                Not because everything is perfect,
                                but because you make imperfect moments
                                worth keeping.
                            </p>
                        </article>
                        <article class="reason reveal tilt">
                            <div class="icon">
                                ∞
                            </div>
                            <h3>
                                You are unforgettable.
                            </h3>
                            <p>
                                Some people simply become part of
                                your story. You became one of my
                                favorite chapters.
                            </p>
                        </article>
                        <article class="reason reveal tilt">
                            <div class="icon">
                                ♥
                            </div>
                            <h3>
                                You are you.
                            </h3>
                            <p>
                                And honestly, that is already more
                                than enough reason for me.
                            </p>
                        </article>
                        <article class="reason reveal tilt">
                            <div class="icon">
                                ✧
                            </div>
                            <h3>
                                More memories ahead.
                            </h3>
                            <p>
                                This is not a look back.
                                It is a little celebration of everything
                                still waiting for us.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <!-- ==================================================
                 STORY
                 ================================================== -->
            <section
                class="section"
                id="story">
                <div class="container">
                    <div class="reveal">
                        <div class="eyebrow">
                            The story so far
                        </div>
                        <h2 class="section-title">
                            Some moments deserve to be
                            <em>
                                remembered.
                            </em>
                        </h2>
                        <p class="section-copy">
                            Replace these three lines with your
                            real memories to make this page
                            completely yours.
                        </p>
                    </div>
                    <div class="timeline">
                        <div class="story reveal">
                            <div class="date">
                                chapter one
                            </div>
                            <h3>
                                The moment it started.
                            </h3>
                            <p>
                                Write the story of the day you met,
                                the first conversation, or the first
                                moment you realized this person mattered.
                            </p>
                        </div>
                        <div class="story reveal">
                            <div class="date">
                                chapter two
                            </div>
                            <h3>
                                The moment you knew.
                            </h3>
                            <p>
                                Add one of your favorite memories here —
                                something tiny, funny, romantic,
                                or completely unexpected.
                            </p>
                        </div>
                        <div class="story reveal">
                            <div class="date">
                                chapter three
                            </div>
                            <h3>
                                Everything still ahead.
                            </h3>
                            <p>
                                There are memories that do not exist yet.
                                That might be the most exciting part of all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ==================================================
                 GALLERY
                 ================================================== -->
            <section
                class="section"
                id="gallery">
                <div class="container">
                    <div class="reveal">
                        <div class="eyebrow">
                            Our little gallery
                        </div>
                        <h2 class="section-title">
                            A few moments worth keeping
                            <em>
                                forever.
                            </em>
                        </h2>
                        <p class="section-copy">
                            Replace these sample images with
                            your real photos. Tap any photo for
                            a full-screen view.
                        </p>
                    </div>
                    <div class="gallery-grid">
                        <figure
                            class="gallery-item reveal"
                            data-full="images/photo-1.svg">
                            <img
                                src="images/photo-1.svg"
                                alt="Memory 1"
                                loading="lazy"
                                decoding="async">
                            <figcaption>
                                A favorite moment ✦
                            </figcaption>
                        </figure>
                        <figure
                            class="gallery-item reveal"
                            data-full="images/photo-2.svg">
                            <img
                                src="images/photo-2.svg"
                                alt="Memory 2"
                                loading="lazy"
                                decoding="async">
                            <figcaption>
                                That beautiful day
                            </figcaption>
                        </figure>
                        <figure
                            class="gallery-item reveal"
                            data-full="images/photo-3.svg">
                            <img
                                src="images/photo-3.svg"
                                alt="Memory 3"
                                loading="lazy"
                                decoding="async">
                            <figcaption>
                                A little adventure
                            </figcaption>
                        </figure>
                        <figure
                            class="gallery-item reveal"
                            data-full="images/photo-4.svg">
                            <img
                                src="images/photo-4.svg"
                                alt="Memory 4"
                                loading="lazy"
                                decoding="async">
                            <figcaption>
                                Just us
                            </figcaption>
                        </figure>
                        <figure
                            class="gallery-item reveal"
                            data-full="images/photo-5.svg">
                            <img
                                src="images/photo-5.svg"
                                alt="Memory 5"
                                loading="lazy"
                                decoding="async">
                            <figcaption>
                                Another favorite
                            </figcaption>
                        </figure>
                        <figure
                            class="gallery-item reveal"
                            data-full="images/photo-6.svg">
                            <img
                                src="images/photo-6.svg"
                                alt="Memory 6"
                                loading="lazy"
                                decoding="async">
                            <figcaption>
                                More to come ♥
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            <!-- ==================================================
                 QUOTE
                 ================================================== -->
            <section class="section quote-section">
                <div class="container">
                    <div class="quote-card reveal">
                        <div class="tiny-heart">
                            ♥
                        </div>
                        <blockquote>
                            “Some people make your heart feel
                            <em>
                                more alive.
                            </em>
                            ”
                        </blockquote>
                        <p>
                            Today is for celebrating one
                            of those people.
                        </p>
                    </div>
                </div>
            </section>
            <!-- ==================================================
                 SURPRISE
                 ================================================== -->
            <section
                class="surprise"
                id="surprise">
                <div class="surprise-box reveal">
                    <div class="lock">
                        🎁
                    </div>
                    <div class="eyebrow eyebrow-center">
                        One last thing
                    </div>
                    <h2>
                        Ready for your
                        <span>
                            surprise?
                        </span>
                    </h2>
                    <p>
                        There is one message hidden here.
                        It only appears when you click the button.
                    </p>
                    <button
                        class="btn btn-primary"
                        id="surpriseBtn"
                        type="button">
                        Open it ♥
                    </button>
                    <div
                        class="hidden-message"
                        id="hiddenMessage">
                        <h3>
                            Happy Birthday, beautiful soul.
                        </h3>
                        <p>
                            I hope you smile a little wider today,
                            dream a little bigger this year,
                            and never forget how deeply special you are.
                            Here is to another year of you —
                            and to all the beautiful moments still to come.
                        </p>
                        <div class="final-line">
                            You deserve the world. ✨
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- ==================================================
             FOOTER
             ================================================== -->
        <footer>
            Made with
            <span class="made">
                ♥
            </span>
            for someone extraordinary.
        </footer>
    </div>
    <!-- ==================================================
         Gallery Lightbox
         ================================================== -->
    <div
        class="gallery-overlay"
        id="galleryOverlay"
        aria-hidden="true">
        <div class="gallery-view">
            <button
                class="gallery-close"
                id="galleryClose"
                type="button"
                aria-label="Close image">
                ×
            </button>
            <img
                id="galleryOverlayImg"
                src=""
                alt="">
            <div class="gallery-note">
                Click outside the image
                or press Escape to close.
            </div>
        </div>
    </div>
    <!-- ==================================================
         JavaScript
         ================================================== -->
    <script src="js/script.js"></script>
</body>

</html>