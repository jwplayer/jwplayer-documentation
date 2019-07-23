# Customize Chromecast Dialog

<img src="https://img.shields.io/badge/%20-Android%20v2%20DEPRECATED-FFBA43.svg?logo=android&logoColor=gray">

!!!important
The JW Player SDK for Android v2 is available only to customers with an Enterprise license. JW Player plans to deprecate support for this version of the SDK for Android soon. To ensure that your viewers benefit from ongoing SDK improvements, upgrade to [JW Player SDK for Android v3](https://developer.jwplayer.com/sdk/android/docs/developer-guide/index.html). Please contact your JW Player representative if you have additional questions.
!!!

You can customize the appearance of the `VideoMediaRouteControllerDialog` which appears when you click on the `MediaRouteButton` when casting.

You can do this by overriding the `custom_media_route_controller_controls_dialog.xml` layout file.

As an example, here is the `custom_media_route_controller_controls_dialog.xml` that we use in our demo app:

```xml
<?xml version="1.0" encoding="utf-8"?>
<!--
  Copyright 2015 Google Inc. All rights reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  -->
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
				android:layout_width="wrap_content"
				android:layout_height="wrap_content"
				android:paddingLeft="24dp"
				android:paddingRight="24dp">

	<RelativeLayout
		android:id="@+id/iconContainer"
		android:layout_width="68dp"
		android:layout_height="68dp"
		android:layout_alignParentLeft="true">

		<ImageView
			android:id="@+id/iconView"
			android:layout_width="wrap_content"
			android:layout_height="wrap_content"
			android:adjustViewBounds="false"
			android:cropToPadding="false"
			android:scaleType="centerCrop"
			android:src="@drawable/album_art_placeholder"/>

	</RelativeLayout>

	<ImageView
		android:id="@+id/playPauseView"
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_alignParentRight="true"
		android:layout_centerVertical="true"
		android:src="@drawable/ic_av_pause_sm_dark"/>

	<ProgressBar
		android:id="@+id/loadingView"
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_alignBottom="@+id/playPauseView"
		android:layout_alignLeft="@+id/playPauseView"
		android:layout_alignRight="@+id/playPauseView"
		android:layout_alignTop="@+id/playPauseView"
		android:layout_centerVertical="true"
		android:visibility="gone"/>

	<LinearLayout
		android:id="@+id/textContainer"
		android:layout_width="wrap_content"
		android:layout_height="wrap_content"
		android:layout_centerVertical="true"
		android:layout_marginLeft="5dp"
		android:layout_marginRight="10dp"
		android:layout_toLeftOf="@+id/playPauseView"
		android:layout_toRightOf="@+id/iconContainer"
		android:orientation="vertical" >

		<TextView
			android:id="@+id/titleView"
			android:layout_width="fill_parent"
			android:layout_height="wrap_content"
			android:layout_alignTop="@+id/iconContainer"
			android:layout_marginLeft="10dp"
			android:layout_marginRight="5dp"
			android:layout_marginTop="6dp"
			android:layout_toLeftOf="@+id/playPauseView"
			android:layout_toRightOf="@+id/iconContainer"
			android:ellipsize="end"
			android:maxLines="1"
			android:textColor="@color/ccl_mr_custom_line_1"
			android:textSize="15sp"/>

		<TextView
			android:id="@+id/subTitleView"
			android:layout_width="fill_parent"
			android:layout_height="wrap_content"
			android:layout_alignBottom="@+id/iconContainer"
			android:layout_marginBottom="7dp"
			android:layout_marginLeft="10dp"
			android:layout_marginRight="5dp"
			android:layout_toLeftOf="@+id/playPauseView"
			android:layout_toRightOf="@+id/iconContainer"
			android:ellipsize="end"
			android:maxLines="1"
			android:textColor="@color/ccl_mr_custom_line_2"
			android:textSize="13sp"/>
	</LinearLayout>

	<TextView
		android:id="@+id/emptyView"
		android:layout_width="fill_parent"
		android:layout_height="wrap_content"
		android:ellipsize="end"
		android:gravity="center"
		android:maxLines="1"
		android:paddingBottom="10dp"
		android:paddingTop="10dp"
		android:text="@string/ccl_no_media_info"
		android:textAlignment="center"
		android:textColor="@color/ccl_mr_custom_line_1"
		android:textSize="15sp"
		android:visibility="gone"/>

</RelativeLayout>
```
