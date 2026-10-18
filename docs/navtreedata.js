/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "FastLED", "index.html", [
    [ "FastLED - The Universal LED Library for Embedded and Arduino", "index.html", "index" ],
    [ "Audio Detector Testing Guide", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html", [
      [ "Development Workflow: Tune, Then Delete", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md49", null ],
      [ "Overview", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md50", null ],
      [ "Tier 1: Synthetic Signal Testing (Permanent)", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md51", [
        [ "Signal Generators", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md52", null ],
        [ "Test Patterns", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md53", null ],
        [ "Expected Results (Synthetic)", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md54", null ],
        [ "Amplitude Sweep", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md55", null ]
      ] ],
      [ "Tier 2: Real-World Audio Calibration (Development Only)", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md56", [
        [ "Step 1: Source Audio Samples", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md57", null ],
        [ "Step 2: Establish Ground Truth", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md58", null ],
        [ "Step 3: Trim, Normalize, and Mix", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md59", null ],
        [ "Step 4: Create Level Variants", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md60", null ],
        [ "Step 5: Write Temporary C++ Tests", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md61", null ],
        [ "Step 6: Set Appropriate Thresholds", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md62", null ],
        [ "Step 7: Transfer to Synthetic Tests and Clean Up", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md63", null ]
      ] ],
      [ "Tier 3: Sample Rate Invariance Testing", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md64", [
        [ "Purpose", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md65", null ],
        [ "Method", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md66", null ],
        [ "Expected Results", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md67", null ]
      ] ],
      [ "The Synthetic-vs-Real Gap", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md68", null ],
      [ "Optimization: Temporal Spectral Variance", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md69", [
        [ "The Problem", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md70", null ],
        [ "The Temporal Variance Idea", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md71", null ],
        [ "Implementation: SpectralVariance Filter", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md72", null ],
        [ "Results on Real Audio", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md73", null ],
        [ "Why a Boost, Not a Primary Feature", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md74", null ],
        [ "Feature Distribution in Real Audio (0dB Voice+Guitar Mix)", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md75", null ],
        [ "Feature Distribution in Real Audio (3-Way Voice+Guitar+Drums Mix)", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md76", null ]
      ] ],
      [ "How the Test Audio Was Created", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md77", [
        [ "Source Audio", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md78", null ],
        [ "Trim and Normalize", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md79", null ],
        [ "Mix with Offset", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md80", null ],
        [ "3b. 3-Way Mix (Voice+Guitar+Drums)", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md81", null ],
        [ "Level Variants", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md82", null ],
        [ "Encode to MP3", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md83", null ],
        [ "Test Region Layout", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md84", null ]
      ] ],
      [ "Example Directive: Improving an Audio Detector", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md85", [
        [ "Template", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md86", null ],
        [ "Worked Example: VocalDetector Enhancement", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md87", [
          [ "Problem", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md88", null ],
          [ "Changes", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md89", [
            [ "Synthetic signal generators added to test helpers", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md90", null ],
            [ "Two new spectral features", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md91", null ],
            [ "Improved formant detection", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md92", null ],
            [ "Five-feature weighted confidence scoring", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md93", null ],
            [ "Seven new test cases", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md94", null ],
            [ "Real-world MP3 calibration (Tier 2)", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md95", null ],
            [ "Results and lessons learned", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md96", null ]
          ] ],
          [ "Risk Assessment", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md97", null ]
        ] ]
      ] ],
      [ "Future Work", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md98", null ],
      [ "Running Tests", "d5/d8c/md_fl_2audio_2_t_e_s_t_i_n_g.html#autotoc_md99", null ]
    ] ],
    [ "FLED v1 Container Format", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html", [
      [ "File Layout", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md153", null ],
      [ "Pixel Format Enum", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md154", null ],
      [ "JSON Envelope", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md155", null ],
      [ "Source Color Metadata", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md156", [
        [ "Default tuple", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md157", null ],
        [ "Color classes by pixel format", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md158", null ],
        [ "Playback with and without colour management (B6)", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md159", null ],
        [ "Declaration verdicts vs. consumer policy", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md160", null ],
        [ "Validation rules", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md161", null ],
        [ "Forward compatibility", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md162", null ]
      ] ],
      [ "Frame Payload", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md163", null ],
      [ "Growth Notes", "da/d9b/md_fl_2fled_2_f_l_e_d___f_o_r_m_a_t.html#autotoc_md164", null ]
    ] ],
    [ "RGB8 Performance Guide", "d8/d7d/_c_r_g_b_performance_guide.html", [
      [ "Inline (Single-Pixel) Patterns", "d8/d7d/_c_r_g_b_performance_guide.html#inline_patterns", null ],
      [ "Bulk Operation Patterns", "d8/d7d/_c_r_g_b_performance_guide.html#bulk_patterns", null ],
      [ "Performance Characteristics", "d8/d7d/_c_r_g_b_performance_guide.html#performance_characteristics", null ]
    ] ],
    [ "fl/remote Architecture", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html", [
      [ "Overview", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md349", null ],
      [ "Layer Architecture", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md350", null ],
      [ "Layers", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md351", [
        [ "Transport Layer (fl/remote/transport/)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md352", [
          [ "Serial Transport (transport/serial/)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md353", null ],
          [ "HTTP Streaming Transport (transport/http/)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md354", null ]
        ] ],
        [ "Composition Layer (Factory Functions in transport/serial.h)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md355", null ],
        [ "Application Layer (fl/remote/remote.h)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md356", null ]
      ] ],
      [ "Design Rationale", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md357", [
        [ "Why Separate Transport and Application Logic?", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md358", null ],
        [ "Zero-Copy Optimization", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md359", null ],
        [ "Example: Using HTTP Streaming Transport", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md360", null ],
        [ "Example: Custom JSONL Protocol", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md361", null ]
      ] ],
      [ "File Organization", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md362", null ],
      [ "Protocol Formats", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md363", [
        [ "Serial Transport Protocol", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md364", null ],
        [ "HTTP Streaming Protocol", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md365", [
          [ "SYNC Mode (Immediate Response)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md366", null ],
          [ "ASYNC Mode (ACK + Result)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md367", null ],
          [ "ASYNC_STREAM Mode (ACK + Updates + Final)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md368", null ]
        ] ]
      ] ],
      [ "RPC Modes and Response Handling", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md369", [
        [ "SYNC Mode (Default)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md370", null ],
        [ "ASYNC Mode", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md371", null ],
        [ "ASYNC_STREAM Mode", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md372", null ],
        [ "ResponseSend API", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md373", null ]
      ] ],
      [ "Migration Notes", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md374", [
        [ "From Old API (fastled3)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md375", null ],
        [ "From Serial to HTTP Transport", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md376", null ]
      ] ],
      [ "Sequence Diagrams", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md377", [
        [ "SYNC Mode (Immediate Response)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md378", null ],
        [ "ASYNC Mode (ACK + Result)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md379", null ],
        [ "ASYNC_STREAM Mode (ACK + Updates + Final)", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md380", null ]
      ] ],
      [ "Component Diagram", "df/d89/md_fl_2remote_2_a_r_c_h_i_t_e_c_t_u_r_e.html#autotoc_md381", null ]
    ] ],
    [ "HTTP Streaming RPC Protocol Specification", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html", [
      [ "Overview", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md406", null ],
      [ "Protocol Version", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md407", null ],
      [ "HTTP Request Format (Client → Server)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md409", [
        [ "Headers", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md410", null ],
        [ "JSON-RPC Request Format", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md411", null ]
      ] ],
      [ "HTTP Response Format (Server → Client)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md413", [
        [ "Headers", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md414", null ],
        [ "JSON-RPC Response Format", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md415", [
          [ "Success Response", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md416", null ],
          [ "Error Response", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md417", null ]
        ] ]
      ] ],
      [ "RPC Modes", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md419", [
        [ "SYNC Mode (Immediate Response)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md420", null ],
        [ "ASYNC Mode (ACK + Later Result)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md422", null ],
        [ "ASYNC_STREAM Mode (ACK + Updates + Final)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md424", null ]
      ] ],
      [ "Heartbeat Protocol", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md426", [
        [ "Ping (Request)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md427", null ],
        [ "Pong (Response)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md428", null ],
        [ "Heartbeat Timing", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md429", null ]
      ] ],
      [ "Connection Lifecycle", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md431", [
        [ "Initial Connection", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md432", null ],
        [ "Normal Operation", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md433", null ],
        [ "Reconnection", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md434", null ]
      ] ],
      [ "Error Handling", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md436", [
        [ "Connection Errors", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md437", null ],
        [ "HTTP Errors", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md438", null ],
        [ "JSON-RPC Errors", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md439", null ]
      ] ],
      [ "Security Considerations", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md441", [
        [ "Transport Security", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md442", null ],
        [ "Authentication", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md443", null ],
        [ "Rate Limiting", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md444", null ]
      ] ],
      [ "Implementation Requirements", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md446", [
        [ "Client Requirements", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md447", null ],
        [ "Server Requirements", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md448", null ]
      ] ],
      [ "Example Implementations", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md450", [
        [ "SYNC Request/Response", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md451", null ],
        [ "ASYNC Request/Response", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md453", null ],
        [ "ASYNC_STREAM Request/Response", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md455", null ]
      ] ],
      [ "Protocol Extensions", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md457", [
        [ "Batch Requests (Optional)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md458", null ],
        [ "Notifications (No Response)", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md459", null ]
      ] ],
      [ "Compliance Checklist", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md461", [
        [ "JSON-RPC 2.0 Compliance", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md462", null ],
        [ "HTTP/1.1 Compliance", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md463", null ],
        [ "Custom Features", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md464", null ]
      ] ],
      [ "References", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md466", null ],
      [ "Changelog", "d0/de6/md_fl_2stl_2asio_2http_2_p_r_o_t_o_c_o_l.html#autotoc_md468", null ]
    ] ],
    [ "FastLED ↔ Asio Compatibility Layer", "df/d1f/md_fl_2stl_2asio_2_r_e_a_d_m_e___a_s_i_o___c_o_m_p_a_t.html", [
      [ "Type Mapping", "df/d1f/md_fl_2stl_2asio_2_r_e_a_d_m_e___a_s_i_o___c_o_m_p_a_t.html#autotoc_md529", null ],
      [ "Operation Mapping", "df/d1f/md_fl_2stl_2asio_2_r_e_a_d_m_e___a_s_i_o___c_o_m_p_a_t.html#autotoc_md530", null ],
      [ "Completion Handler Signatures", "df/d1f/md_fl_2stl_2asio_2_r_e_a_d_m_e___a_s_i_o___c_o_m_p_a_t.html#autotoc_md531", null ],
      [ "Error Handling", "df/d1f/md_fl_2stl_2asio_2_r_e_a_d_m_e___a_s_i_o___c_o_m_p_a_t.html#autotoc_md532", null ],
      [ "What's NOT Ported (By Design)", "df/d1f/md_fl_2stl_2asio_2_r_e_a_d_m_e___a_s_i_o___c_o_m_p_a_t.html#autotoc_md533", null ]
    ] ],
    [ "FastLED Source Tree (<tt>src/</tt>)", "d3/dcc/md__r_e_a_d_m_e.html", [
      [ "Table of Contents", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md630", null ],
      [ "Overview and Quick Start", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md632", [
        [ "What lives in src/", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md633", null ],
        [ "Include policy", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md634", null ]
      ] ],
      [ "Directory Map (7 major areas)", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md636", [
        [ "Public headers and glue", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md637", null ],
        [ "Core foundation: fl/", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md638", null ],
        [ "Effects and graphics: fx/", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md639", null ],
        [ "Platforms and HAL: platforms/", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md640", null ],
        [ "Sensors and input: fl/sensors/", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md641", null ],
        [ "Fonts: fl/font/", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md642", null ],
        [ "Third‑party and shims: third_party/", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md643", null ]
      ] ],
      [ "Quick Usage Examples", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md645", [
        [ "Classic strip setup", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md646", null ],
        [ "2D matrix with fl::Leds + XYMap", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md647", null ],
        [ "Resampling pipeline (downscale/upscale)", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md648", null ],
        [ "JSON UI (WASM)", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md649", null ]
      ] ],
      [ "Deep Dives by Area", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md651", [
        [ "Public API surface", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md652", null ],
        [ "Core foundation cross‑reference", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md653", null ],
        [ "FX engine building blocks", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md654", null ],
        [ "Platform layer and stubs", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md655", null ],
        [ "WASM specifics", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md656", null ],
        [ "Testing and compile‑time gates", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md657", null ]
      ] ],
      [ "Guidance for New Users", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md659", null ],
      [ "Guidance for C++ Developers", "d3/dcc/md__r_e_a_d_m_e.html#autotoc_md660", null ]
    ] ],
    [ "minimp3 provenance", "d6/d2d/md_third__party_2minimp3_2_p_r_o_v_e_n_a_n_c_e.html", [
      [ "Fixed-point path", "d6/d2d/md_third__party_2minimp3_2_p_r_o_v_e_n_a_n_c_e.html#autotoc_md719", null ],
      [ "Integer SIMD, and where it stops", "d6/d2d/md_third__party_2minimp3_2_p_r_o_v_e_n_a_n_c_e.html#autotoc_md720", null ],
      [ "Cortex-M4/M7 DSP evaluation", "d6/d2d/md_third__party_2minimp3_2_p_r_o_v_e_n_a_n_c_e.html#autotoc_md721", null ]
    ] ],
    [ "MoodRing redesign journal", "da/d77/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2examples_2_mood_ring_2_d_e_s_i_g_n.html", [
      [ "What MoodRing is for", "da/d77/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2examples_2_mood_ring_2_d_e_s_i_g_n.html#autotoc_md956", null ],
      [ "Why the first version was half-broken", "da/d77/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2examples_2_mood_ring_2_d_e_s_i_g_n.html#autotoc_md957", null ],
      [ "Round 1: listen / paint split, continuous blend", "da/d77/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2examples_2_mood_ring_2_d_e_s_i_g_n.html#autotoc_md958", null ],
      [ "Round 2: make time musical", "da/d77/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2examples_2_mood_ring_2_d_e_s_i_g_n.html#autotoc_md959", null ],
      [ "Round 3: simplify and harden", "da/d77/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2examples_2_mood_ring_2_d_e_s_i_g_n.html#autotoc_md960", null ],
      [ "File map", "da/d77/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2examples_2_mood_ring_2_d_e_s_i_g_n.html#autotoc_md961", null ]
    ] ],
    [ "TODO", "d1/d5a/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2examples_2_t_o_d_o.html", null ],
    [ "Platform Porting Guide", "dd/d9e/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2_p_o_r_t_i_n_g.html", [
      [ "Fast porting for a new board on existing hardware", "dd/d9e/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2_p_o_r_t_i_n_g.html#autotoc_md1166", [
        [ "Setting up the basic files/folders", "dd/d9e/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2_p_o_r_t_i_n_g.html#autotoc_md1167", null ],
        [ "Porting fastpin.h", "dd/d9e/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2_p_o_r_t_i_n_g.html#autotoc_md1168", null ],
        [ "Porting fastspi.h", "dd/d9e/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2_p_o_r_t_i_n_g.html#autotoc_md1169", null ],
        [ "Porting clockless.h", "dd/d9e/md__2home_2runner_2work_2_fast_l_e_d_2_fast_l_e_d_2_p_o_r_t_i_n_g.html#autotoc_md1170", null ]
      ] ]
    ] ],
    [ "Deprecated List", "da/d58/deprecated.html", null ],
    [ "Todo List", "dd/da0/todo.html", null ],
    [ "Topics", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", "namespacemembers_vars" ],
        [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d0/d08/classfl_1_1span_adf9ad27aa9bd1c1e2cc19d0cf60d158a.html#adf9ad27aa9bd1c1e2cc19d0cf60d158a",
"d0/d10/structfl_1_1colorimetric__response_1_1_emitter_profile_ad111e6677cb8e5820230c90eaeeb432d.html#ad111e6677cb8e5820230c90eaeeb432d",
"d0/d34/classfl_1_1task_1_1_promise_ab8481f3ae7a015c75471d31426ccc6bc.html#ab8481f3ae7a015c75471d31426ccc6bc",
"d0/d5b/fastled__delay_8cpp_8hpp_a2d8dda85477a00deab830effc5159d33.html#a2d8dda85477a00deab830effc5159d33",
"d0/d64/classfl_1_1s24x8_a11d37e95fc524d5441095a844688b111.html#a11d37e95fc524d5441095a844688b111",
"d0/d6b/classfl_1_1_gradient_ab562e15f004f9fcf47deb128b933ad0c.html#ab562e15f004f9fcf47deb128b933ad0c",
"d0/d8b/namespacefl_1_1gfx_aaff90054c65e3cbab7674c80c5a80f0b.html#aaff90054c65e3cbab7674c80c5a80f0b",
"d0/da2/classfl_1_1third__party_1_1ez_w_s2812gpio_a069b871190cbe2e06c4b6cadc32bc21f.html#a069b871190cbe2e06c4b6cadc32bc21f",
"d0/dce/classfl_1_1_x_y_map_a6bdc7ed295f0317e35aa64cf396f0642.html#a6bdc7ed295f0317e35aa64cf396f0642",
"d0/ddb/classfl_1_1string__view_a2dfc22b87487b207a8819f91dcffb4ec.html#a2dfc22b87487b207a8819f91dcffb4ec",
"d0/ddf/classfl_1_1audio_1_1_frequency_bin_mapper_abe5414fa8986ee320189665d06ce7690.html#abe5414fa8986ee320189665d06ce7690",
"d0/dfa/structfl_1_1_transform16_ad9a08c6438dec88b846a872b8f26abb0.html#ad9a08c6438dec88b846a872b8f26abb0",
"d1/d1d/_blur_benchmark_8ino_a241aeeb764887ae5e3de58b98f04b16d.html#a241aeeb764887ae5e3de58b98f04b16d",
"d1/d2a/power__mgt_8cpp_8hpp_a8454821e9d1ebf7961d5fec218766136.html#a8454821e9d1ebf7961d5fec218766136",
"d1/d42/structfl_1_1spi_1_1_device_1_1_impl_a9203e8a8b3c1f9075e8006a4d1d48875.html#a9203e8a8b3c1f9075e8006a4d1d48875",
"d1/d5c/classfl_1_1_x_y_raster_u8_sparse_ab77860b26c6c82b183c39bbf6ab0eb76.html#ab77860b26c6c82b183c39bbf6ab0eb76",
"d1/d74/classfl_1_1shared__ptr_a27df6e2a1650d985bdeda33f0303c83f.html#a27df6e2a1650d985bdeda33f0303c83f",
"d1/d86/namespacefl_1_1third__party.html#a0f64caefed71572a046645f272725dc9",
"d1/d86/namespacefl_1_1third__party.html#af14ca2ac260fb914ee830e6e2bd6ba8d",
"d1/d86/namespacefl_1_1third__party_a8beede527670777958b97d0e204265c9.html#a8beede527670777958b97d0e204265c9",
"d1/d93/classfl_1_1fixed__point__base_a5d71fa7268294cd937881011830b5375.html#a5d71fa7268294cd937881011830b5375",
"d1/db9/classfl_1_1_grid_ad3441c4c96846e5cf0da4ca992800e5a.html#ad3441c4c96846e5cf0da4ca992800e5a",
"d1/dcd/structfl_1_1detail_1_1int__to__fixed_3_01_int_bits_00_01_frac_bits_00_01true_01_4.html",
"d1/ddf/structfl_1_1_t_i_m_i_n_g___t_m1803__400_k_h_z.html",
"d1/dec/classfl_1_1audio_1_1_auto_gain_ad1c24859bdfbd526f435c9a103d63380.html#ad1c24859bdfbd526f435c9a103d63380",
"d2/d1e/pixel__iterator__any_8h_source.html",
"d2/d26/classfl_1_1flat__map_a06790793d8eb2de8daadb445770b93fe.html#a06790793d8eb2de8daadb445770b93fe",
"d2/d2b/classfl_1_1task_1_1_scheduler_ab86b4b1d07886f34886ae44a44403f2a.html#ab86b4b1d07886f34886ae44a44403f2a",
"d2/d50/src_2fl_2fx_22d_2wave_8h.html",
"d2/d59/namespacefl_1_1third__party_1_1vorbis_a335e123d5173d07af930d35eab3ed2b6.html#a335e123d5173d07af930d35eab3ed2b6",
"d2/d67/classfl_1_1audio_1_1detector_1_1_silence_a0a5567ebb97380b7b457e77acfaf21c2.html#a0a5567ebb97380b7b457e77acfaf21c2",
"d2/d74/scale__up_8h_a7a22d9cde4fcadf30f65f1810436f179.html#a7a22d9cde4fcadf30f65f1810436f179",
"d2/d7b/classfl_1_1channels_1_1rx_1_1_ws2812_stream_decoder_a573b683666c22e5365e0fde7789cac60.html#a573b683666c22e5365e0fde7789cac60",
"d2/d9f/classfl_1_1_w_l_e_d_abef777bcf8b4f33c04d49e4a2d09c4a8.html#abef777bcf8b4f33c04d49e4a2d09c4a8",
"d2/db2/classfl_1_1string_a5938e43e019a7dbe7e1a89ff4a3576d1.html#a5938e43e019a7dbe7e1a89ff4a3576d1",
"d2/db7/classfl_1_1url_a6904f6560e1a0f6e46cce8c357d81d72.html#a6904f6560e1a0f6e46cce8c357d81d72",
"d2/dd5/classfl_1_1_x_y_raster_sparse___r_g_b8_a5faa635fd38e59b072169e01322fce38.html#a5faa635fd38e59b072169e01322fce38",
"d2/dec/classfl_1_1_vector_set_a559891eeab588fc896dc53a8aea67e99.html#a559891eeab588fc896dc53a8aea67e99",
"d2/dfa/classfl_1_1priority__queue__stable_ab02bc14572c0f7423be0942265c9472a.html#ab02bc14572c0f7423be0942265c9472a",
"d3/d1d/group___power_ga8f233a8a889834c31b6a02667c2d74c3.html#ga8f233a8a889834c31b6a02667c2d74c3",
"d3/d48/classfl_1_1u0x32_a666f31b2dc371ab451a10f358eeabcd2.html#a666f31b2dc371ab451a10f358eeabcd2",
"d3/d58/structfl_1_1_raw_premix_binder_a4b6c1f8343765f129beaf4edb4575b40.html#a4b6c1f8343765f129beaf4edb4575b40",
"d3/d6b/classfl_1_1audio_1_1_processor_a64550a9dd297ff27bde3a8143f736977.html#a64550a9dd297ff27bde3a8143f736977",
"d3/d6c/structfl_1_1float__conversion__visitor_3_01double_01_4_a10ff10cfc92427060d5670115e702570.html#a10ff10cfc92427060d5670115e702570",
"d3/d7a/classfl_1_1third__party_1_1_software_gif_decoder_af68838686c8534f2ae4ba8ded76b9352.html#af68838686c8534f2ae4ba8ded76b9352",
"d3/d88/structfl_1_1_hash_3_01bool_01_4_a4ab8f6d7393e62e33dfc0eeccd5c9fa2.html#a4ab8f6d7393e62e33dfc0eeccd5c9fa2",
"d3/da6/classfl_1_1audio_1_1detector_1_1_transient_abb532210c5ef57833aea3673b41d60bf.html#abb532210c5ef57833aea3673b41d60bf",
"d3/dc1/classfl_1_1_rose_path_afcb622084857472bbf7a39a51000d0d1.html#afcb622084857472bbf7a39a51000d0d1",
"d3/dd1/classfl_1_1audio_1_1detector_1_1_backbeat.html",
"d3/df2/classfl_1_1allocator__psram_a70a5648973b46d9402312afec2764c7a.html#a70a5648973b46d9402312afec2764c7a",
"d4/d09/structfl_1_1_rpc_1_1_config_af310600ea321d1bcb9b7f36136ad1ff7.html#af310600ea321d1bcb9b7f36136ad1ff7",
"d4/d26/_fire2012_8ino_a381ceb87530dc5fee1be3e77d33b3a53.html#a381ceb87530dc5fee1be3e77d33b3a53",
"d4/d36/namespacefl.html#a51cdd987334f9e0df8831db36b6c8091",
"d4/d36/namespacefl.html#acd50929586c2c38eeccda26210773c5d",
"d4/d36/namespacefl_a006e87a522bc666b67a3a315713e46d5.html#a006e87a522bc666b67a3a315713e46d5",
"d4/d36/namespacefl_a267004a7ccc7983ba23af5b6da02ccf5.html#a267004a7ccc7983ba23af5b6da02ccf5",
"d4/d36/namespacefl_a4717e431b6c23ec1a1afb5161dc1aa69.html#a4717e431b6c23ec1a1afb5161dc1aa69af73c72aec9cbf0bdceec0f7182828542",
"d4/d36/namespacefl_a6d447c072711c31db831690901388c48.html#a6d447c072711c31db831690901388c48",
"d4/d36/namespacefl_a926d7e662b37a619a6bff3a84dd6a2ed.html#a926d7e662b37a619a6bff3a84dd6a2ed",
"d4/d36/namespacefl_aba3c6fbc88f76df194f89a2baac92b32.html#aba3c6fbc88f76df194f89a2baac92b32",
"d4/d36/namespacefl_adf08976a82fd066526d1b8c786e6a8de.html#adf08976a82fd066526d1b8c786e6a8de",
"d4/d3a/_first_light_8ino-example.html",
"d4/d54/compiler__control_8h_abd56e39e4160e66b0e3fee0b52f5f28f.html#abd56e39e4160e66b0e3fee0b52f5f28f",
"d4/d63/classfl_1_1unsorted__map__fixed_a5339d4c390f1fced0d7a817abaf3283d.html#a5339d4c390f1fced0d7a817abaf3283d",
"d4/d94/namespacemood__ring_1_1anonymous__namespace_02layers_8cpp_03_a8c433f8f32c4e1d4663a8bb21bcc350d.html#a8c433f8f32c4e1d4663a8bb21bcc350d",
"d4/dc1/structfl_1_1spi_1_1_transaction_1_1_impl_ac40d5a2f9b1cf69ea2ae6f545f78ef50.html#ac40d5a2f9b1cf69ea2ae6f545f78ef50",
"d4/dca/classfl_1_1array_aaf34d10ca6cb857fd3ebd80d2cfff168.html#aaf34d10ca6cb857fd3ebd80d2cfff168",
"d4/dd2/classfl_1_1_video_fx_wrapper_a8cb8dbfffc3c6666fcde510ffae62b62.html#a8cb8dbfffc3c6666fcde510ffae62b62",
"d4/dfe/classfl_1_1audio_1_1detector_1_1_chord_detector_a821a22753189aeb2b9a8a2d72d682a29.html#a821a22753189aeb2b9a8a2d72d682a29",
"d5/d1e/_auto_research_rp_pio_parallel_8cpp.html",
"d5/d38/namespacefl_1_1color.html#ad897a70e78d4a3dcfba91c1bb548d154",
"d5/d5d/structfl_1_1vec2_a6fd701b95ba055b62db58b604048a266.html#a6fd701b95ba055b62db58b604048a266",
"d5/d6f/_fx_noise_plus_palette_8ino_a724ede617f7981bb805b8c456cf65e7d.html#a724ede617f7981bb805b8c456cf65e7d",
"d5/d80/structfl_1_1printf__detail_1_1_format_spec_adab00369202c2809a5dd8a77da331494.html#adab00369202c2809a5dd8a77da331494",
"d5/d8b/classfl_1_1_channel_abddb793874901102ad3bf2b6c2e3b082.html#abddb793874901102ad3bf2b6c2e3b082",
"d5/d9b/classfl_1_1_fire2012_a8e62e64e2456d7e1ec374316d62999dd.html#a8e62e64e2456d7e1ec374316d62999dd",
"d5/db2/_octo_w_s2811_8ino.html",
"d5/dec/classfl_1_1u8x8_a29541a7a4bf29c50ae483fd9cf1222d1.html#a29541a7a4bf29c50ae483fd9cf1222d1",
"d5/dfc/structfl_1_1_channel_request_a60700b411c967d77f93b42c3fea9f479.html#a60700b411c967d77f93b42c3fea9f479",
"d6/d26/_noise_playground_8ino-example.html",
"d6/d2e/classfl_1_1unique__ptr_afe579ff20b142c4288ed843498de6f51.html#afe579ff20b142c4288ed843498de6f51",
"d6/d35/structfl_1_1chrono_1_1steady__clock_ad28b3273063cf8ad66e3cfa6a474f7d4.html#ad28b3273063cf8ad66e3cfa6a474f7d4",
"d6/d58/class_counting_button_a28cf528b823336f8eba41a4c35f3fc2a.html#a28cf528b823336f8eba41a4c35f3fc2a",
"d6/d64/fastled_8h_a7077a6a69b1339a4c04f4bb9ecc0ad3f.html#a7077a6a69b1339a4c04f4bb9ecc0ad3f",
"d6/d7c/structfl_1_1numeric__limits_a2814197dead70c21a7a61463c0fe9476.html#a2814197dead70c21a7a61463c0fe9476",
"d6/d7e/fltest_8h_a6afc9fe095d62fbe0c83a3226062a608.html#a6afc9fe095d62fbe0c83a3226062a608",
"d6/d88/namespaceautoresearch_1_1timing__drift.html#a03ffe5c42f4df5684994fcca16502e57",
"d6/d9d/classfl_1_1_audio_batch_a2fa86008d6ffc97d73d068e0903be545.html#a2fa86008d6ffc97d73d068e0903be545",
"d6/dd2/classfl_1_1audio_1_1fft_1_1_context.html#a70518125b4df5fd0cd5868be9ef01d76",
"d6/dd8/classfl_1_1detail_1_1_gaussian_filter_impl_a6d5985b3b733928a68f7edaf1d4b3492.html#a6d5985b3b733928a68f7edaf1d4b3492",
"d6/dee/namespacefl_1_1detail_1_1anonymous__namespace_02rgbw_8cpp_8hpp_03_a57b665d045ed6db7d07f9e08c3fa4900.html#a57b665d045ed6db7d07f9e08c3fa4900",
"d6/dfd/structfl_1_1_hash_abd948e2261b935ca754621bc3f70a976.html#abd948e2261b935ca754621bc3f70a976",
"d7/d17/classmood__ring_1_1_ring_canvas_a5947d6f56eb548da07254d89f2ce32e7.html#a5947d6f56eb548da07254d89f2ce32e7",
"d7/d23/class_loopback_test_runner_a81bb09b35d7f743305251503a03583ee.html#a81bb09b35d7f743305251503a03583ee",
"d7/d3a/classfl_1_1audio_1_1_synth_oscillator_impl_a13c1aa65d04b75f856978c2e2c8674ea.html#a13c1aa65d04b75f856978c2e2c8674ea",
"d7/d4f/structfl_1_1test_1_1_compare_gt_a24b722d5568128b53da3ad314131cdc8.html#a24b722d5568128b53da3ad314131cdc8",
"d7/d6b/classfl_1_1span_3_01_t_00_01dynamic__extent_01_4_a193143728b7045ad547b116c1e09c274.html#a193143728b7045ad547b116c1e09c274",
"d7/d70/structfl_1_1net_1_1http_1_1_request_options_ac73a40459eeab482df7e85fe11e77959.html#ac73a40459eeab482df7e85fe11e77959",
"d7/d8d/classfl_1_1audio_1_1_sound_level_meter_aed27752da41a075055fd1459de85a3e1.html#aed27752da41a075055fd1459de85a3e1",
"d7/da8/lzw_8cpp_8hpp.html",
"d7/dd1/classfl_1_1_rpc_affddda5a0bdb61dde3fe11b313e6e731.html#affddda5a0bdb61dde3fe11b313e6e731",
"d7/def/_x_y_path_2src_2wave_8cpp_ac4a022c25ad8412bc08ce7a7a9df5e75.html#ac4a022c25ad8412bc08ce7a7a9df5e75",
"d7/dfe/classfl_1_1_u_i_checkbox_a48efde8234646b754b8033d5eee7151f.html#a48efde8234646b754b8033d5eee7151f",
"d8/d35/classfl_1_1audio_1_1detector_1_1_multi_band_beat.html#a5e0f3c5fcedfd912ec2105efc9c3666c",
"d8/d4f/structfl_1_1_error_info_a5918e46fd1759587f0ee77d5ca6b39b0.html#a5918e46fd1759587f0ee77d5ca6b39b0",
"d8/d76/classfl_1_1ifstream_a5abf7dfc7391d3d58d9be500b383a9c7.html#a5abf7dfc7391d3d58d9be500b383a9c7",
"d8/d97/classfl_1_1_module___experiment8.html",
"d8/db9/_rpc_client_8ino_a29069ed90dd5aeb496309302da4c4367.html#a29069ed90dd5aeb496309302da4c4367",
"d8/dca/structfl_1_1colorimetric__detail_1_1_emitter_profile_a60251cb8e7cf74a917ffdb11c8998c83.html#a60251cb8e7cf74a917ffdb11c8998c83",
"d8/dd0/midi___defs_8h_af21148044f66becc62341d0611f6f238.html#af21148044f66becc62341d0611f6f238",
"d8/de8/classfl_1_1test_1_1_subcase_a005f4d2ca30173ef3eb8e67871eaec62.html#a005f4d2ca30173ef3eb8e67871eaec62",
"d8/dea/classfl_1_1audio_1_1_reactive_aef219320655be769f9fb42dcc14005ab.html#aef219320655be769f9fb42dcc14005ab",
"d8/df9/classfl_1_1list_ab4602796c782947b488f0f232a336e4b.html#ab4602796c782947b488f0f232a336e4b",
"d9/d0a/classfl_1_1spi_1_1_device_a1c7282e043d140cd2f37ae148a91400b.html#a1c7282e043d140cd2f37ae148a91400b",
"d9/d17/classfl_1_1audio_1_1detector_1_1_drop_detector_ad5f1804dc1188f232b4190272f15a609.html#ad5f1804dc1188f232b4190272f15a609",
"d9/d2a/classfl_1_1_potentiometer_a3d0b3472a66af0f235869d73b79e3a33.html#a3d0b3472a66af0f235869d73b79e3a33",
"d9/d33/namespacefl_1_1pwm__state_a42f0721124df2bcf213f1bb9b4c117e3.html#a42f0721124df2bcf213f1bb9b4c117e3a575bd2d24a831fcb6c9cbbbe36af0813",
"d9/d52/classfl_1_1audio_1_1_sample_impl_a28021f18266b65656919cf55df50afcd.html#a28021f18266b65656919cf55df50afcd",
"d9/d66/classfl_1_1u4x12_a695f0e89a8e4f4197d0cbca6e0c4d521.html#a695f0e89a8e4f4197d0cbca6e0c4d521",
"d9/d77/classfl_1_1audio_1_1detector_1_1_note_a8b280d0485e8f1e54d77371b5390f0ae.html#a8b280d0485e8f1e54d77371b5390f0ae",
"d9/d95/class_w_s2801_controller_a29ff78958626179e48c7fc0de8b3acc0.html#a29ff78958626179e48c7fc0de8b3acc0",
"d9/dae/structfl_1_1int__conversion__visitor_a6d7b0c8ee41dab6a8494a6309f9eb46a.html#a6d7b0c8ee41dab6a8494a6309f9eb46a",
"d9/dd3/structfl_1_1_transform_float_a81abffd7b47c5f429aef966ca77c07e4.html#a81abffd7b47c5f429aef966ca77c07e4",
"d9/df3/classfl_1_1set_afad3f07e66087680ef0226851371b83c.html#afad3f07e66087680ef0226851371b83c",
"da/d01/classfl_1_1task_1_1_time_task_ae499f9adaf1055fd02d32a5c116439fa.html#ae499f9adaf1055fd02d32a5c116439fa",
"da/d31/structfl_1_1_button_1_1_listener_a43d56935452405873e4594f9131cc4b9.html#a43d56935452405873e4594f9131cc4b9",
"da/d43/classfl_1_1s12x4_a8874febfe274b563f6d404e1ccd1e1f1.html#a8874febfe274b563f6d404e1ccd1e1f1",
"da/d4b/classfl_1_1_i_decoder_a1526b2c0104dff508ce0257d5195b5da.html#a1526b2c0104dff508ce0257d5195b5da",
"da/d69/audio__input_8h.html",
"da/d8d/classfl_1_1_i_fast_l_e_d_a165333cfa1cb6117f02dfa4a013f31ae.html#a165333cfa1cb6117f02dfa4a013f31ae",
"da/da0/classfl_1_1fixed__point_ab07689ebb81d26d98252fa9f73f9af0a.html#ab07689ebb81d26d98252fa9f73f9af0a",
"da/dba/namespacefl_1_1asio_a71ea0ec019fe8379abb69a2b643ed5da.html#a71ea0ec019fe8379abb69a2b643ed5daab8328ce74de4af0fd6e177d2f9a840ec",
"da/dd6/structfl_1_1_c_r_g_b_a09d2870bd5b5e26e15ef3b72dcc9a54a.html#a09d2870bd5b5e26e15ef3b72dcc9a54a",
"da/dd6/structfl_1_1_c_r_g_b_add5b03a29164cfe4d6e6f36185244a9b.html#add5b03a29164cfe4d6e6f36185244a9ba6c356b635d5286a949cb9981a79b6981",
"da/dd6/structfl_1_1_c_r_g_b_addc73f5219e68c7777c90618f79a03d9.html#addc73f5219e68c7777c90618f79a03d9",
"da/dee/classfl_1_1_mp3_decoder_ae025ed4ef9e0ff3143fc668fc1f63820.html#ae025ed4ef9e0ff3143fc668fc1f63820",
"db/d11/classfl_1_1_async_log_queue_a457cd88cced8fe45cf3c5bc4ccd9b19f.html#a457cd88cced8fe45cf3c5bc4ccd9b19f",
"db/d3d/classfl_1_1test_1_1_serial_reporter_a966491cb29880dbf1529ebbb37c6e194.html#a966491cb29880dbf1529ebbb37c6e194",
"db/d4e/classfl_1_1net_1_1http_1_1_http_stream_transport_ae40b1c1ca39c324acf2e349387eb4711.html#ae40b1c1ca39c324acf2e349387eb4711",
"db/d58/classfl_1_1_perlin_particle_punch_a7570b13d097dd67c7c4e6f845edfda76.html#a7570b13d097dd67c7c4e6f845edfda76",
"db/d5d/classfl_1_1audio_1_1detector_1_1_buildup_detector_affd1546531f462cb2213bf813adc2ef6.html#affd1546531f462cb2213bf813adc2ef6",
"db/d6e/structfl_1_1detail_1_1_method_schema_3_01_r_07_args_8_8_8_08_4_a4f601fb09976dbd54c6f10bd12d38df7.html#a4f601fb09976dbd54c6f10bd12d38df7",
"db/d89/classfl_1_1audio_1_1detector_1_1_pitch_a2f2d4e2896800865be8aa65318a5f04d.html#a2f2d4e2896800865be8aa65318a5f04d",
"db/d9c/classfl_1_1audio_1_1_spectral_equalizer_a1b2d3281a8ce6292a5d3ecc88acaeeba.html#a1b2d3281a8ce6292a5d3ecc88acaeeba",
"db/dbf/namespacefl_1_1audio.html#a27fdda9124e7ef01452cffb8c94e6119",
"db/dd9/_auto_research_rp_concurrency_8cpp.html",
"db/dff/classfl_1_1s8x24_a0b962d8f0cb46750077e55c39fbd7894.html#a0b962d8f0cb46750077e55c39fbd7894",
"dc/d14/hydropack_8ino_a336cc91acf1b4c4f37ac4639b7ea7058.html#a336cc91acf1b4c4f37ac4639b7ea7058",
"dc/d29/structfl_1_1_color_profile_binding_a2648da5ec6b49196e01cd4d796643e22.html#a2648da5ec6b49196e01cd4d796643e22",
"dc/d41/namespacefl_1_1third__party_1_1truetype.html#acf02a282dd242ec05b00b307c248ad8a",
"dc/d4a/classfl_1_1_line_simplifier_a5e8ee8b81b125464da1608253174bd09.html#a5e8ee8b81b125464da1608253174bd09",
"dc/d56/classfl_1_1unordered__map_a621b4b835b32df308024915ad2b21427.html#a621b4b835b32df308024915ad2b21427",
"dc/d64/classfl_1_1array_3_01_t_00_010_01_4_a1ead8a2dd86f3f698f4de68e18e611ae.html#a1ead8a2dd86f3f698f4de68e18e611ae",
"dc/d7e/classfl_1_1_triangular_filter_af70ee5e4f9a668a7c02a81bf8e485aad.html#af70ee5e4f9a668a7c02a81bf8e485aad",
"dc/d8d/structfl_1_1_jpeg_config_a63245e155150c7ec009d73bff9083626.html#a63245e155150c7ec009d73bff9083626af3936e5fba05a5f1001f366a4c5330e0",
"dc/da7/kiss__fftr_8h_a16dc872f6d9d4a613cea584cf86eae2e.html#a16dc872f6d9d4a613cea584cf86eae2e",
"dc/dd7/_auto_research_ota_8h.html#a5c848c3c300cec25b5f015a14fb4f58b",
"dc/dec/structfl_1_1json__value_a725474fc0f1691ebaf94668f4b844f25.html#a725474fc0f1691ebaf94668f4b844f25",
"dc/dfe/classfl_1_1deque_a5bafb959ba348496ed370684264325a8.html#a5bafb959ba348496ed370684264325a8",
"dd/d07/classfl_1_1unordered__set_a0d3565537d13e5bbcb0458daf4578b5e.html#a0d3565537d13e5bbcb0458daf4578b5e",
"dd/d24/classfl_1_1task_1_1_coroutine_task_a73f784ee2f550e626b37ec72cb17a058.html#a73f784ee2f550e626b37ec72cb17a058",
"dd/d34/structfl_1_1test_1_1detail_1_1_type_name_holder.html",
"dd/d55/structfl_1_1numeric__limits_3_01double_01_4_a0b965561fbfbb226d08d8ba26ddc38a8.html#a0b965561fbfbb226d08d8ba26ddc38a8",
"dd/d76/namespacefl_1_1third__party_1_1hexwave_a5dfba6f4edb0d0eba22df4c0029fba45.html#a5dfba6f4edb0d0eba22df4c0029fba45",
"dd/db2/colorutils__misc_8h_ac609526d053cb23ca61c11f04f548d21.html#ac609526d053cb23ca61c11f04f548d21",
"dd/dbb/classfl_1_1s0x32_a850c27b6754e845056341a5db2051997.html#a850c27b6754e845056341a5db2051997",
"dd/dd8/classfl_1_1_optional_a8bcd9e34056ac3890fc6da2aea972f98.html#a8bcd9e34056ac3890fc6da2aea972f98",
"dd/deb/structfl_1_1_gap_aeb6e5a914cf406f32f72439b8cc61f94.html#aeb6e5a914cf406f32f72439b8cc61f94",
"de/d0b/classfl_1_1flat__set_a7f22830917a806a515d36cfb00fa4526.html#a7f22830917a806a515d36cfb00fa4526",
"de/d22/classfl_1_1_potentiometer_low_level_a98580e024690a1e2dc3454676168ea8b.html#a98580e024690a1e2dc3454676168ea8b",
"de/d40/classfl_1_1json_a345b3f9f3f3943fffb20657dd13c15e1.html#a345b3f9f3f3943fffb20657dd13c15e1",
"de/d47/stb__vorbis_8cpp_8hpp_ae775f38b526f0a59f62026ae9a6d80dc.html#ae775f38b526f0a59f62026ae9a6d80dc",
"de/d66/classfl_1_1basic__string_a3bf0d8d5d4ce1d502decb6d3c4c1cb8f.html#a3bf0d8d5d4ce1d502decb6d3c4c1cb8f",
"de/d66/classfl_1_1basic__string_af2aa8bb2da5befffbe6b03f2ced012a1.html#af2aa8bb2da5befffbe6b03f2ced012a1",
"de/d7a/_object_f_l_e_d_8h_ace34c903c455e495bfdf418e07e2811a.html#ace34c903c455e495bfdf418e07e2811a",
"de/daf/classfl_1_1task_1_1_handle_aa56ee95e931813e398e29e923766556d.html#aa56ee95e931813e398e29e923766556d",
"de/dca/classfl_1_1_engine_events_abeff434efdbe861cf2a96388e0fecca3.html#abeff434efdbe861cf2a96388e0fecca3",
"de/de5/key_8h.html",
"df/d01/classfl_1_1chrono_1_1time__point_a9aa896d55630c3ed351cc6fa65c85c53.html#a9aa896d55630c3ed351cc6fa65c85c53",
"df/d19/structfl_1_1detail_1_1_parlio_logger_info_a6e9166eb8af3288660fd4df76ba61f4e.html#a6e9166eb8af3288660fd4df76ba61f4e",
"df/d22/classfl_1_1detail_1_1memorybuf_ab500a3e09293a2c299eceeadf228599a.html#ab500a3e09293a2c299eceeadf228599a",
"df/d40/examples_2_corkscrew_2corkscrew_8h_afe461d27b9c48d5921c00d521181f12f.html#afe461d27b9c48d5921c00d521181f12f",
"df/d53/classfl_1_1sstream__noop_ac6eb07fdc61672a2e2012ff2697b61bd.html#ac6eb07fdc61672a2e2012ff2697b61bd",
"df/d6a/class_midi_interface_a75bb5abe39b8ecf19ec692f5b7bd5071.html#a75bb5abe39b8ecf19ec692f5b7bd5071",
"df/d97/structfl_1_1isr_1_1config_a9ca21ab64285b9824211e3810c2bded6.html#a9ca21ab64285b9824211e3810c2bded6",
"df/d9e/namespacefl_1_1detail_aba4a7705df7c5d417012bcf74e429d4d.html#aba4a7705df7c5d417012bcf74e429d4d",
"df/db6/task_8cpp_8hpp_source.html",
"df/dd8/stdint_8h_aa07a7f57d3797cd35953e46ac949d93f.html#aa07a7f57d3797cd35953e46ac949d93f",
"df/df5/structfl_1_1_channel_config_a751a42ce641847cb6c97684508fe0afa.html#a751a42ce641847cb6c97684508fe0afa",
"dir_e42350710e4d449d396561585bae204b.html",
"globals_vars_p.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';